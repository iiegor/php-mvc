<?php namespace helpers;

trait Logger {
	public static function exceptionHandler($e)
    {
        self::customErrorMsg();
    }

    public static function errorHandler($number, $message, $file, $line)
    {
        self::customErrorMsg();
    }

    public static function customErrorMsg()
    {
        echo '<p>An error occured, The error has been reported.</p>';

        exit;
    }
}