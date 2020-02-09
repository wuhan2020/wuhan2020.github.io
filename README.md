# Wuhan2020 Community Official Website

![CI](https://github.com/wuhan2020/wuhan2020.github.io/workflows/CI/badge.svg)
![wuhan2020.github.io deploy](https://github.com/wuhan2020/wuhan2020.github.io/workflows/wuhan2020.github.io%20deploy/badge.svg)

All website material  of https://community.wuhan2020.org.cn


## Prerequisite

wuhan2020.github.io is powered by [docsite](https://github.com/txd-team/docsite).please read [https://docsite.js.org](https://docsite.js.org)
Please make sure your version of docsite is `docsite@wuhan2020`.
Please also make sure your node version is higher than 8.x.

## Build instruction

1. Run ` npm i docsite@wuhan2020 -g ` to install docsite for project wuhan2020.
2. Run `npm i` in the root directory to install the dependencies.
3. Run `docsite start` in the root directory to start a local server, you will see the website in 'http://127.0.0.1:8080'.
4. Run `docsite build` to build source code.
5. Verify your change locally: `python -m SimpleHTTPServer 8000`, when your python version is 3 use :`python3 -m http.server 8000` instead.

If you have higher version of node installed, you may consider `nvm` to allow different versions of `node` coexisting on your machine.

1. Follow the [instructions](http://nvm.sh) to install nvm
2. Run `nvm install v8.16.0` to install node v8
3. Run `nvm use v8.16.0` to switch the working environment to node v8
4. Run ` npm i docsite@wuhan2020 -g ` to install docsite for project wuhan2020.

Make sure `npm` and `docsite` are configured in the environmet configuration of os . eg: /etc/profile or .bash_profile of Macos

Then you are all set to run and build the website. Follow the build instruction above for the details.


## How To Write Documents

### Add a new doc

1. Add new .md file under docs/en-us or docs/zh-cn. Corresponding to Chinese file and English file , and the Chinese and English file names should be consistent.
2. Update site_config/docs.js, add a new entry to the blog in either en-us or zh-cn.
3. Run docsite start locally to verify the blog can be displayed correctly.
4. Send the pull request containing the .md and doc.js only.

### Add a new article for developers

1. Add new .md file under docs/en-us/developers or docs/zh-cn/developers, the file name should end up with _dev.md. Note that the suffix _dev is necessary.
2. Update site_config/develop.js, add a new entry in either en-us or zh-cn.
3. Run docsite start locally to verify the article can be displayed correctly.
4. Send the pull request containing the *_dev.md and develop.js only.

### Add a new project showcase

1. Open project.js directly and find the appropriate language block, such as "en-us".
2. Add a project entry under `projects.list` and please make sure that the entry contains `img`, `title`, `description` and `link`.
3. Run docsite start locally to verify the article can be displayed correctly.
4. Send the pull request containing the project.js only.

### Add a new blog

1. Add new .md file under blog/en-us or blog/zh-cn. Corresponding to Chinese file and English file , and the Chinese and English file names should be consistent.
2. Run docsite start locally to verify the blog can be displayed correctly.
3. Send the pull request containing the .md only.
4. `SEO` config is required.

notice : Blog documents will be automatically sorted by time, without menu configuration
Set 'hidden' to 'true' for documents you don't want to display temporarily`

## SEO

the type is :
```
---
hidden: false
title: title
keywords: keywords1,keywords2
description: some description
author: author name
date: 2018-12-29
---
```

## How To Add One New Language

If you want to add a new language, such as Thai. 

1. Please append the element:  ```{ value: 'th-th', text: 'ภาษาไทย' }``` to the `langlist` variable of `site config/site.js`. 
2. Then please add directories named `th-th` in `docs`and `blog` directories , here you can add documents in this language . 

notice : Of course, you can also see `langlist` variables in several other files. This is just a bottom line measure, and you don't have to modify it..

## How To Add sitemap for SEO

Please see the page : https://docsite.js.org/en-us/docs/SEO.html


## Others

+ If you want to add `search in site`，see [https://docsite.js.org/zh-cn/docs/search.html](https://docsite.js.org/zh-cn/docs/search.html)
+ This is docsite docs :[https://docsite.js.org/zh-cn/docs/path.html](https://docsite.js.org/zh-cn/docs/path.html)
