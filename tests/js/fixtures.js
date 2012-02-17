window.MobileFrontendTests = {
	cleanFixtures: function() {
		$("#zero-rated-banner").remove(); // remove remnants from another test somewhere in test suite
		$("#qunit-fixture-x").remove();
	},
	createFixtures: function() {
		this.cleanFixtures();
		$('<div id="qunit-fixture-x">').html(['<div id="test-env">',
		'	<img id="logo" src="" alt="logo">',
		'	<div id="nav" style="display:none">',
		'		navigation menu',
		'		<select id="languageselection">',
		'			<option value="en">english</option>',
		'			<option value="de">deutsch</option>',
		'		</select>',
		'	</div>',
		'	<div id="zero-rated-banner">',
		'		banner',
		'		<button id="dismiss-notification">dismiss banner</button>',
		'	</div>',
		'	<input type="text" id="search">',
		'	<button id="clearsearch">clear</button>',
		'	<div id="results">search results here</div>',
		'	<div id="content">',
		'		<h2 class="section_heading" id="section_1">',
		'			<button class="section_heading show" section_id="1">Show</button>',
		'			<button class="section_heading hide" section_id="1" style="display:none">Hide</button>',
		'			<span id="First_Section">First Section</span>',
		'		</h2>',
		'		<div class="content_block" id="content_1" style="display:none">',
		'			<p>',
		'			Text',
		'			<span id="First_Section_2">2.1</span>',
		'			</p>',
		'		</div>',
		'		<div id="anchor_1" class="section_anchors" style="display:none">',
		'			<a href="#section_1" class="back_to_top">&#8593;Jump back a section</a>',
		'		</div>',
		'		<h2 class="section_heading" id="section_2">',
		'			<button class="section_heading show" section_id="2">Show</button>',
		'			<button class="section_heading hide" section_id="2" style="display:none">Hide</button>',
		'			<span id="Second_Section">Second Section</span>',
		'		</h2>',
		'		<div class="content_block" id="content_2"  style="display:none"><p>Text with a <a href="#First_Section">section 1</a> link! and to <a href="#First_Section_2">section 1.2</a></p></div>',
		'	</div>',
		'</div>'].join("")).appendTo(document.body);
	},
	triggerEvent: function(el, eventName) {
		// NOTE: this will not work on legacy browsers
		var ev = document.createEvent("HTMLEvents");
		ev.initEvent(eventName, true, true);
		el.dispatchEvent(ev);
	}
}
var scriptPath = "/";
window.MobileFrontendTests.createFixtures(); // setup so scripts can initialise