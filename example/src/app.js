const minifyClassNames = require("../../index");

minifyClassNames([
	{ input: "index.html", output: "build/index.html" },
	{ input: "css/main.css", output: "build/css/main.css" },
]);
