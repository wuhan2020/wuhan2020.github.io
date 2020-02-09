#! /usr/bin/python3
# 
# List all the docs that should be transformed into a language.
# Usage: 
#       python3 blog_and_docs.py [-h] [-s SRC_LANG] dst_lang
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
            # result.append(str(fpath))
            result.append((fpath))
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


def docs_for_new_lang(dst_lang:str, src_lang:str):
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
    return parser.parse_args()


def main():
    args = arg_parser()
    src_lang = args.src_lang
    dst_lang = args.dst_lang

    DEFAULT_LANG = src_lang
    result = docs_for_new_lang(dst_lang, src_lang)
    for i in result:
        print(i)


if __name__ == "__main__":
    main()