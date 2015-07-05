	<script type="text/javascript" src="<?php echo DIR . 'bundles/bundle.' . BUILD . '.js'; ?>"></script>
	<script type="text/javascript" src="<?php echo DIR . 'bundles/app.' . BUILD . '.js'; ?>"></script>
	
	<script type="text/javascript">
	Reaper.Environment = {
		isDev: <?php echo (ENVIRONMENT == 'development' ? 'true' : 'false'); ?>,
		session: {"uid": "a0i1", "name": "undefined"}
	};

	//session: "<?php echo $data['session']; ?>"

	var reaper = Reaper.getInstance();
	reaper.init(Reaper.Environment);
	reaper.bootstrap();
	</script>
</body>
</html>
