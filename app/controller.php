<?php namespace app;

use app\view as View;
use helpers\session as Session;

class Controller {
	use Session;

	public $view;
	public $language;
	public $data;

	public function __construct() {
		$this->view = new View();
		
		$this->data['controller'] = strtolower(explode('\\', get_class($this))[1]);
		$this->data['session'] = Session::get('session_info') ? Session::get('session_info') : 'null';
	}
}
