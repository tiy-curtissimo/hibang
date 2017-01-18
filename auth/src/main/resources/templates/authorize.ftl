<html>
	<head>
		<title>hi! OAuth 2.0 Authorization</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	</head>
	<body>
		<div class="container">
			<h2>Please Confirm</h2>

			<p>
				Do you authorize "${authorizationRequest.clientId}" at "${authorizationRequest.redirectUri}" to access your protected resources
				with scope ${authorizationRequest.scope?join(", ")}.
			</p>
			<form id="confirmationForm" name="confirmationForm"
				action="../oauth/authorize" method="post">
				<input name="user_oauth_approval" value="true" type="hidden">
				<input name="scope.openid" value="true" type="hidden">
				<input type="hidden" id="csrf_token" name="${_csrf.parameterName}" value="${_csrf.token}"/>
				<input name="authorize" value="Authorize" type="hidden">
				<button class="btn btn-primary" type="submit">Approve</button>
			</form>
			<form id="denyForm" name="confirmationForm"
				action="../oauth/authorize" method="post">
				<input name="user_oauth_approval" value="true" type="hidden">
				<input name="scope.openid" value="false" type="hidden">
				<input type="hidden" id="csrf_token" name="${_csrf.parameterName}" value="${_csrf.token}"/>
				<input name="authorize" value="Authorize" type="hidden">
				<button class="btn btn-primary" type="submit">Deny</button>
			</form>
		</div>
	</body>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script></body>
</html>
