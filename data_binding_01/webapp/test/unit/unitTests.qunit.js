/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"data_binding_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
