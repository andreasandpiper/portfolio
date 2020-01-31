---
layout: post
title:  "Another way to implement React with Ruby on Rails on Heroku"
date:   2018-04-23
categories: [ruby]
excerpt_separator: <!--more-->
---
A tutorial to set up a rails app on Heroku!

<!--more-->
React is gaining popularity for good reason. It creates a virtual DOM and uses renderable components which results in a speedy application. For my application, I decided to use React for my client side and Ruby on Rails as a JSON API. I had spent much time searching for the best solution only to find… there are many solutions. After discussing with my partner, I decided to incorporate React as a bundle file that Rails will serve.

Rails will serve any file that is located in the public folder, so I used this to my advantage and set up wepback to bundle the Javascript file to the public folder.

My file structure looks like this:

```
-app
   //Rails files in here, such as controllers, models, etc
...
-client
   //React files in here, such as dist, src, etc
...
-public
   -app
      -assets
      -bundle.js
      -index.html
...
-package.json //include Webpack config in here!
```

I include the package.json file for the client in the root folder so Heroku will follow the instructions to bundle the files when deploying to production. You also need to tell webpack where to place the bundled Javascript file.

Change this in your webpack.config.js…

```
...
output: {
   filename: 'bundle.js',
   path: resolve(__dirname, '../public/app/'),
   publicPath: '/app/'
},
...
```

Now Webpack knows where to place the file. Next we want to configure Node to bundle after dependencies are installed. We do this with heroku-postbuild.

```
"scripts": {
   "start": "react-scripts start",
   "bundle": "node_modules/.bin/webpack --config   ./client/webpack.deploy.config.js --progress --colors",
   "test": "react-scripts test --env=jsdom",
   "build-css": "node-sass-chokidar --include-path ./client/src --include-path ./node_modules src/ -o src/",
   "watch-css": "npm run build-css && node-sass-chokidar --include-path ./client/src --include-path ./node_modules src/ -o src/ --watch --recursive",
   "build": "react-scripts build",
   "watch": "webpack --config ./client/webpack.config.js --watch",
   "heroku-postbuild": "npm run bundle"
}
```

Make sure to set up a Heroku buildpack. You can do this in the Heroku CLI.

```
heroku buildpacks:clear
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add heroku/ruby --index 2
```

Now you are all set to develop a React/Rails project! All you got to do is npm run watch and rails server and start building!
