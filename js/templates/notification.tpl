<div id="view-notification-<%= key %>" class="notification">
	<h6><%= title %></h6>
	<p><%= message %></p>

	<button class="notification-button" data-bind="click: close"><%= typeof(okText) !== 'undefined' ?  okText : 'OK' %></button>
</div>