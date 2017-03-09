## mPOWEr Pivotal Tracker Dashboard

This dashboard was created using angularJS, based on the free template of SB Admin 2.0.
This project displays stories in progress from mPOWEr's Pivotal Tracker API.

## Installation
####1. Clone this project

```sh
$ git clone https://github.com/start-angular/sb-admin-angular.git
```

####2.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
 
 
```sh
$ sudo apt-get install npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower
```
####3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```
- bower install is ran from the postinstall
```sh
$ npm install 
```
- a shortcut for `grunt serve`
```sh
$ npm start
```
- a shortcut for `grunt serve:dist` to minify the files for deployment
```sh
$ npm run dist 
```


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```

If you get an error about "TypeError: Path must be a string," try downgrading 
your npm to version 5.
```sh
npm install -g n
n 5.12.0
n use 5.12.0
```


### Automation tools

- [Grunt](http://gruntjs.com/)
