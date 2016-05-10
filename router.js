function route(pathname,handle,response) {
	console.log("About to router a request for "+pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response);

	}else{
		console.log("No request handle found for "+pathname);
		return "404 not found."
	}
}

exports.route=route;
