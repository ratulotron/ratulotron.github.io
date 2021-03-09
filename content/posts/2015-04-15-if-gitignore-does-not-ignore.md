---
categories:
- tips
date: 2015-04-15T11:03:31.000+00:00
description: Solution to .gitignore file not ignoring
tags:
- git
- cli
title: If Gitignore does not ignore
updated: 2021-03-09 3:18 PM
author: Ratul Minhaz
layout: ''

---
Sometimes after changing your .gitignore the new (un)ignored files don't get get behind the scenes, as you would have expected. The reason behind this is you have already committed the files that you added to .gitignore and now git is tracking the files. Unless you delete them git will keep an eye on any changes on those files as it would do with any other. To get the new .gitignore rule registered with the repo you will have to manually remove tho file(s) from git's cache. So here is what you need to do:

First of all, YOU MUST COMMIT any staged progress, otherwise they will get lost.

Then you can go on to removing the problematic files from git's tracking. For only one file, you will have to run this commad and that's it. Git will smartly ignore whatever you tell it to ignore:

``` shell
git rm -r --cached <file> 
```

But in case you have way too many files to mention one by one, you might want to remove all the files at once. In this case git will stop tracking all files, so you will also have to add them once again manually.

``` shell
git rm -r --cached <file> 
git add . 
```

Lastly, simply commit again:

``` shell
git commit -m "fixed .gitignore" 
```

Tada, problem solved! If you ever want to undo this, just add the file to git:

``` shell
git add <file> 
```