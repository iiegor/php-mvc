<?php namespace app;

class View {

	public static function render($path,$data = false, $error = false) {
		require "app/views/$path.php";
	}

	public static function renderTemplate($path,$data = false) {
		require "app/views/_layouts/$path.php";
	}

}
