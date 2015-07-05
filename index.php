<?php
if(file_exists('vendor/autoload.php')) require 'vendor/autoload.php';
else
{
	echo '<pre>$ composer install</pre>';
	exit;
}

/**
 * Application static and internal config
 */
if (file_exists('config/application.php')) require 'config/application.php';
else
{
	echo 'File: config/application.php not found.';
	exit;
}

new \config\application();

/**
 * Application environment
 */
if (defined('ENVIRONMENT')) {
	switch (ENVIRONMENT) {
		case 'production':
			error_reporting(0);
			break;
		case 'development':
			error_reporting(E_ALL);
			break;
	}
} else error_reporting(E_ALL);

/**
 * Application deployment
 */
use \app\router as Router;

Router::any('/', '\controllers\welcome@index');
Router::error('\controllers\error@index');

Router::dispatch();
