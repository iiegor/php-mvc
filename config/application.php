<?php namespace config;

use helpers\session as Session;

class Application {
	private $environment;

	public function __construct() {
		$this->environment = parse_ini_file('environment.ini');

		$this->load();
	}

	private function load() {
		ob_start();

		define('DIR', $this->environment['app_path']);
		define('TITLE', $this->environment['app_name']);
		define('BUILD', $this->environment['app_build']);

		//set default controller
		define('DEFAULT_CONTROLLER', 'welcome');
		define('DEFAULT_METHOD' , 'index');

		//set app environment
		define('ENVIRONMENT', $this->environment['env']);

		//set application exception handler if production
		if (ENVIRONMENT != 'development') {
			set_exception_handler('helpers\logger::ExceptionHandler');
			set_error_handler('helpers\logger::ErrorHandler');
		}

		//start the session
		Session::init();
	}
}
