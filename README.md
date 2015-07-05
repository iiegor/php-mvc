# php-mvc
> A PHP implementation of the MVC design pattern.

## Installing
At first you need to simply download the repo as a zip or git clone it.<br>
Once you have the template, you’ll need to install its dependencies. If you don’t already have Node installed, you can get it from nodejs.org.

Once you’ve installed Node, you’ll need to install the Grunt command-line tool globally with:<br>
```
$ npm install -g gulp
```
Next, in the folder of the cloned repo, rename the config/environment.example.ini to environment.ini and edit it with your settings.
Then run:<br>
```
$ npm install
```
Once your dependencies are installed, you should be able to simply run:
```
$ gulp
```
This will build your application once in production mode. This means your assets will be minified and version-stamped.