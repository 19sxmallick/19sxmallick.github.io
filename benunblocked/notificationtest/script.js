if (!("Notification" in window)) {
	alert("This browser does not support system notifications");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
	// If it's okay let's create a notification
	var notification = new Notification("Hi there!");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== 'denied') {
	Notification.requestPermission(function (permission) {
		// If the user accepts, let's create a notification
		if (permission === "granted") {
		setTimeout(function(){var notification = new Notification("Hi there!");}, 5000);
		}
	});
}
