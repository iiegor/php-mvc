<?php namespace helpers;

trait Session {

  private static $_started = false;

  /**
   * Starts the session
   */
  public static function init(){
    if(session_id() == '' && self::$_started == false){
			session_start();
			self::$_started = true;
		}
	}

  /**
	 * @param string $key   name the data to save
	 * @param string $value the data to save
	 */
	public static function set($key, $value = false){
		if(is_array($key) && $value === false){
			foreach ($key as $name => $value) {
				$_SESSION[$name] = $value;
			}
		} else {
			$_SESSION[$key] = $value;
		}
	}

  /**
	 * @param  string  $key       item to look for in session
	 * @param  boolean $secondkey if used then use as a second key
	 * @return string             returns the key
	 */
	public static function get($key, $secondkey = false){
		if($secondkey == true){
			if(isset($_SESSION[$key][$secondkey])){
				return $_SESSION[$key][$secondkey];
			}
		} else {
			if(isset($_SESSION[$key])){
				return $_SESSION[$key];
			}
		}

		return null;
	}

  /**
	 * @return string with the session id
	 */
	public static function id() {
		return session_id();
	}

  /**
	 * @return array of session indexes
	 */
	public static function raw(){
		return $_SESSION;
	}
}
