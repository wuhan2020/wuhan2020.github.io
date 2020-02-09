#! /usr/bin/python3
# 
# List all the docs that should be transformed into a language.
# Usage: 
#       python3 blog_and_docs.py [-h] [-s SRC_LANG] dst_lang
# Example:
#   1. List all documents needed translation from zh-cn to fr-fr
#       $ python3 blog_and_docs.py en-us
#   2. List from en-us to fr-fr
#       $ python3 blog_and_docs.py -s en-us fr-fr 
#   2. List from en-us to fr-fr, showing all documents regardless the document has exist in the dest lang dir.
#       $ python3 blog_and_docs.py -a -s en-us fr-fr 
# 
# The src_lang and dst_lang shall aligned with definition here: 
#       http://www.lingoes.net/en/translator/langcode.htm

import os, sys
import pathlib
from argparse import ArgumentParser

# Root of the project
root_path = pathlib.Path(os.path.abspath(__file__)).parent.parent
    
# Default language setting
DEFAULT_LANG = 'zh-cn'

# Repo URL
REPO_URL = "https://github.com/wuhan2020/wuhan2020.github.io/tree/dev/"


def traverse(rpath):
    """Traverse the directory and return all the document paths."""
    result = []
    for cwd, dirs, files in os.walk(rpath):
        if not files:
            continue
        cwd_path = pathlib.Path(cwd)
        for fname in files:
            fpath = (cwd_path / fname).relative_to(root_path)
            result.append((fpath))
    return result


def filter_exist(paths):
    """Filter out the exist paths
    Equivalent to:
        list(filter(lambda x: not x.exists(), [root_path/path for path in paths]))
    """
    result = []
    for path in paths:
        if not (root_path / path).exists():
            result.append(path)
    return result

def href(text:str):
    if not isinstance(text, str):
        text = str(text)
    return f'[{text}](https://github.com/wuhan2020/wuhan2020.github.io/tree/dev/{text})'


def change_lang(text:str, lang_code:str):
    """
    Assume the text has the default lang.
    Change the existing default lang to the new lang code.
    """
    if not isinstance(text, str):
        text = str(text)
    return text.replace(DEFAULT_LANG, lang_code)


def docs_for_new_lang(dst_lang:str, src_lang:str, ignore_exist:bool=True):
    """
    List all the docs/blogs in the default language directory
    and then transform the default language code to the lang code.
    """
    # Path to blog directory and doc path
    blog_path = root_path / 'blog' / src_lang
    docs_path = root_path / 'docs' / src_lang

    result = []
    blogs = traverse(blog_path)
    docs = traverse(docs_path)
    for i in blogs + docs:
        # The string that changed the language directory:
        #    change_lang("blog/zh-cn/wuhan2020-official-announcement.md", "en-us")
        #             == "blog/en-us/wuhan2020-official-announcement.md"
        pdst = change_lang(i, dst_lang)
        if ignore_exist and (root_path/pdst).exists():
            continue
        s = '- [ ] ' + href(change_lang(i, dst_lang))
        result.append(s)
    return result

def arg_parser():
    parser = ArgumentParser(
        description="List all documents in the blog and docs directory.")
    parser.add_argument('dst_lang', 
        help='The language you want to transform to. (English = en-us, Japanese = ja-jp, etc). See also the language code: http://www.lingoes.net/en/translator/langcode.htm'
        
    )
    parser.add_argument(
        '-s', '--src_lang', dest='src_lang', default='zh-cn',
        help='The language you want to transform from. (By default zh-ch). See also the language code: http://www.lingoes.net/en/translator/langcode.htm'
    )
    parser.add_argument(
        '-a', '--all', dest='all', action='store_true',
        help='Show all documents that should be in the dest_lang directory. (By default only generate the documents needed to be translated).'
    )
    try:
        result = parser.parse_args()
        return result
    except:
        helpdoc = """Example:
        1. List all documents needed translation from zh-cn to fr-fr
            $ python3 blog_and_docs.py en-us
        2. List from en-us to fr-fr
            $ python3 blog_and_docs.py -s en-us fr-fr 
        3. List from en-us to fr-fr, showing all documents regardless the document has exist in the dest lang dir.
            $ python3 blog_and_docs.py -a -s en-us fr-fr 
        \nSee also:
            Language code for all country: http://www.lingoes.net/en/translator/langcode.htm
        """
        print(helpdoc)
        exit(1)

    


def main():
    args = arg_parser()
    src_lang = args.src_lang
    dst_lang = args.dst_lang

    # Defualt language 
    DEFAULT_LANG = src_lang 
    
    # ignore the existed document
    ignore_exist = not args.all 
    result = docs_for_new_lang(
        dst_lang, 
        src_lang, 
        ignore_exist=ignore_exist
    )

    for i in result:
        print(i)


if __name__ == "__main__":
    main()