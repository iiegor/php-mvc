<?php namespace controllers;

use \app\view as View;

class Welcome extends \app\controller {

	public function index() {
		View::renderTemplate('start', $this->data);
		View::renderTemplate('menu', $this->data);
		View::render('welcome/index', $this->data);
		View::renderTemplate('end', $this->data);
	}

}
