<?php namespace controllers;

use \app\view as View;

class Error extends \app\controller {
	
	public function index() {
		header('HTTP/1.0 404 Not Found');

		View::render('error/404');
	}

}