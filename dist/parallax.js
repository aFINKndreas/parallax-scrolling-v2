/*
Parallax Scrolling Framework - a lightweight and customizable framework for parallax scrolling
Version: 0.1.07-01-2017
Author: Andreas Fink 
Website: https://afink.at
Github: https://github.com/aFinkndreas
*/
document.addEventListener("DOMContentLoaded", function() {

	var defaults = {
		parllaxPercent: 0.25
	};

	var globals = {
		obj: ''
	};

	init();
	draw();

	function init() {
		globals.obj = document.getElementsByTagName("parallax");
		parallax();
	}

	function parallax() {
		for (var i = 0; i < globals.obj.length; i++){
			var offsetTempObj = getCoords(globals.obj[i]);
			if (offsetTempObj.top <= offsetTempObj.height && offsetTempObj.top >= (-offsetTempObj.height)){
				var perc = getAttr(globals.obj[i],'parallax-percent');
				var offset = -offsetTempObj.top*perc;
				globals.obj[i].getElementsByTagName('img')[0].style.height = "calc( 100% * (1 + "+perc+"))";
				globals.obj[i].getElementsByTagName('img')[0].style.transform = "translate3d(0,"+ offset +"px, 0)";
			}	
		}
	}

	function getCoords(elem) {
	    var box = elem.getBoundingClientRect();
	    return box;
	};

	function getValueWithinRange(value,fall,min,max){
		if (value >= min && value <= max){
			return value;
		} else {
			return fall;
		}
	}

	function getAttr(obj,attr){
		if (obj.getAttribute(attr) != null){
			switch (attr){
				case "parallax-percent":
					return getValueWithinRange(obj.getAttribute(attr),defaults.parllaxPercent,0,1);
					break;
				default:
					return obj.getAttribute(attr);
					break;
			}
		} else {
			switch (attr){
				case "parallax-percent":
					return defaults.parllaxPercent;
					break;
				default:
					return "";
					break;
			}
		}
	};

	function draw(){
		if (window.requestAnimationFrame && document.documentElement.classList){
			//console.log("Yes");
			window.addEventListener("scroll", function(event) {
			    window.requestAnimationFrame(parallax);
			}, false);
			window.addEventListener("resize", function(event) {
			    window.requestAnimationFrame(parallax);
			}, false);
		}
	}

});