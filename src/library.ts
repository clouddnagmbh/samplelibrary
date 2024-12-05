import ObjectPath from "sap/base/util/ObjectPath";

sap.ui.getCore().initLibrary({
	name: "at.clouddna.samplelibrary",
	version: "${version}",
	dependencies: [
		"sap.ui.core",
		"sap.f",
		"sap.ushell",
		"sap.suite.ui.commons",
		"sap.ui.richtexteditor"
	],
	types: [],
	interfaces: [],
	controls: [],
	elements: [],
	noLibraryCSS: true
});

const thisLib: { [key: string]: unknown } = ObjectPath.get("at.clouddna.samplelibrary") as { [key: string]: unknown };

export default thisLib;
