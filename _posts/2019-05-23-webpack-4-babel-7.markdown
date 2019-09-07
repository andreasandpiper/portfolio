---
layout: post
title:  "Upgrading to Webpacker 4 and Babel 7"
date:   2019-05-23
categories: [ruby, webpacker, babel]
excerpt_separator: <!--more-->
---
Upgrading to Webpacker 4 took a few extra steps for me. For those of you who also have to do some tweaking after using the babel-upgrade gem, this guide is for you!
<!--more-->

**Upgrade to Webpacker 4**

```
bundle update webpacker
rails webpacker:binstubs
yarn upgrade @rails/webpacker --latest
yarn upgrade webpack-dev-server --latest
```

**Upgrade babel**

There is a gem that does all the changes for you, but I still had some changes to make after https://github.com/babel/babel-upgrade
```
    Update packages in package.json, the above repo outlines the changes well.
    Choose your configuration
```

In babel 7, the working directory is considered the root. For a project wide configuration, use a babel.config.is file in the root directory. If you have babel config for a package that is not the root, place a .babelrc file in the root of the package. You can have both types of config in a project.
Config Files · Babel
Babel has two parallel config file formats, which can be used together, or independently. Project-wide configuration…
babeljs.io

***Remove polyfills***

First, what are polyfills? Polyfills enable us to write modern code, which will work in older browsers

The way babel works is that it takes the syntax, let’s say ES6, and transpiles it to syntax all browsers can understand. Such as let and const turning into var

A polyfill defines a new object or method in browsers that don’t support that object or method. There are a variety of polyfills, some examples include Map and Promise

Make sure to include @babel/polyfill as a dependency, not devDependency!

***Update package renames***

For all plugins, make sure to find out if it has been renamed!
Yarn install and happy hacking!
