---
title: Setting up Ember CLI Sass
date: 2017-01-27T00:00:00.000+00:00
author: Ratul Minhaz
tags:
- frontend
- javascript
- node
updated: 2021-03-09 3:13 PM
layout: ''
description: ''
categories:
- tips

---
Trying to set up Sass with Ember can be quiet problematic if you are using a version manager for Node. For example I was using a version manager called 'n' and could not integrate Sass in anyway with my Ember app. It all boiled down to my Ember installation not finding libraries needed to compile Sass. These two modules were the reason of the problem: node-gyp and node-sass.

After fiddling around for a while I found out the proper way to setup Sass with Ember. First, ensure these are not installed in the project's node_modules:

```bash
npm uninstall node-gyp
npm uninstall node-sass
```

Then install them again with the right version on Node:
```bash
# switch to the latest version of Node
n latest						
npm install -g node-gyp
npm install -g node-sass
# this will install Ember addons for Sass
ember install ember-cli-sass	
```