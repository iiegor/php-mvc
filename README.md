# kekofan-www
> Built using angular.js and react following the mvc pattern

## Installing
At first you need to simply download the repo as a zip or git clone it.<br>
Once you have the template, you’ll need to install its dependencies. If you don’t already have Node installed, you can get it from nodejs.org.

Once you’ve installed Node, you’ll need to install the Grunt command-line tool globally with:<br>
```
$ npm install -g grunt-cli
```
Next, in the folder of the cloned repo, rename the config/environment.example.ini to environment.ini and edit it with your settings.
Then run:<br>
```
$ npm install
```
Once your dependencies are installed, you should be able to simply run:
```
$ grunt build
```
This will build your application once in production mode. This means your assets will be minified and version-stamped.

## To do
- [x] Authentication with google+
- [ ] Improve the performance of spinner component inside another with velocity animation
