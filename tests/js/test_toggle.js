function applyCss() {
	$(".hide").show();
	$(".show").hide();
	$(".openSection .hide").hide();
	$(".openSection .show").show();
}

module("MobileFrontend toggle.js: wm_toggle_section", {
	setup: function() {
		MFET.createFixtures();
		MFE.toggle.init();
		$("#section_1").addClass("openSection");
		$("#content_1,#anchor_1,#section_1 .hide").hide();
	},
	teardown: function() {
		MFET.cleanFixtures();
		window.location.hash = "#";
	}
});

test("wm_toggle_section", function() {
	strictEqual($("#section_1").hasClass("openSection"), true, "openSection class present");
	MFE.toggle.wm_toggle_section("1");
	applyCss();
	strictEqual($("#content_1").is(":visible"), true, "check content is visible on a toggle");
	strictEqual($("#anchor_1").is(":visible"), true, "check anchor is visible on toggle");
	strictEqual($("#section_1").hasClass("openSection"), false, "openSection class removed");
	strictEqual($("#section_1 .hide").is(":visible"), true, "check hide button now visible");
	strictEqual($("#section_1 .show").is(":visible"), false, "check show button now hidden");
	
	// perform second toggle
	MFE.toggle.wm_toggle_section("1");
	applyCss();
	strictEqual($("#content_1").is(":visible"), false, "check content is hidden on a toggle");
	strictEqual($("#anchor_1").is(":visible"), false, "check anchor is hidden on toggle");
	strictEqual($("#section_1 .hide").is(":visible"), false, "check hide button now hidden");
	strictEqual($("#section_1 .show").is(":visible"), true, "check show button now visible");
});

test("wm_reveal_for_hash", function() {
	MFE.toggle.wm_reveal_for_hash("#First_Section");
	applyCss();
	strictEqual($("#content_1").is(":visible"), true, "check content is visible on a toggle");
	strictEqual($("#anchor_1").is(":visible"), true, "check anchor is visible on toggle");
	strictEqual($("#section_1 .hide").is(":visible"), true, "check hide button now visible");
	strictEqual($("#section_1 .show").is(":visible"), false, "check show button now hidden");
});

test("wm_reveal_for_hash", function() {
	MFE.toggle.wm_reveal_for_hash("#First_Section_2");
	applyCss();
	strictEqual($("#content_1").is(":visible"), true, "check content is visible on a toggle");
	strictEqual($("#anchor_1").is(":visible"), true, "check anchor is visible on toggle");
	strictEqual($("#section_1 .hide").is(":visible"), true, "check hide button now visible");
	strictEqual($("#section_1 .show").is(":visible"), false, "check show button now hidden");
});

test("clicking hash links", function() {
	MFET.triggerEvent($("[href=#First_Section_2]")[0], "click");
	applyCss();
	strictEqual($("#content_1").is(":visible"), true, "check content is visible on a toggle");
	strictEqual($("#anchor_1").is(":visible"), true, "check anchor is visible on toggle");
	strictEqual($("#section_1 .hide").is(":visible"), true, "check hide button now visible");
	strictEqual($("#section_1 .show").is(":visible"), false, "check show button now hidden");
});

test("clicking a heading toggles it", function() {
	var visibilityStart = $("#content_1").is(":visible");
	MFET.triggerEvent($("#section_1")[0], "click");
	applyCss();
	strictEqual(visibilityStart, false, "check content is hidden at start");
	strictEqual($("#content_1").is(":visible"), true, "check content is hidden on a toggle");
});