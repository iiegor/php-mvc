<!DOCTYPE html>
<html disabled-manifest="/application.appcache">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width">
	<title>
		<?php
		if(isset($data['title'])) {
			echo $data['title'] . ' - ';
		}

		echo TITLE;
		?>
	</title>

	<link rel="shortcut icon" href="<?php echo DIR . 'images/favicon.ico'; ?>" />
	<link href="<?php echo DIR . 'bundles/style.' . BUILD . '.css'; ?>" rel="stylesheet">
</head>
<body>
