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
				var perc = getAttr(globals.obj[i],'parallax-speed');
				var offset = -offsetTempObj.top*perc;
				if (globals.obj[i].getElementsByTagName('img').length > 0){
					globals.obj[i].getElementsByTagName('img')[0].style.height = "calc( 100% * (1 + "+perc+"))";
					globals.obj[i].getElementsByTagName('img')[0].style.transform = "translate3d(-50%,"+ offset +"px, 0)";
				} else if (globals.obj[i].getElementsByTagName('video').length > 0){
					globals.obj[i].getElementsByTagName('video')[0].style.height = "calc( 100% * (1 + "+perc+"))";
					globals.obj[i].getElementsByTagName('video')[0].style.transform = "translate3d(-50%,"+ offset +"px, 0)";
				}
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
				case "parallax-speed":
					return getValueWithinRange(obj.getAttribute(attr),defaults.parllaxPercent,0,0.5);
					break;
				default:
					return obj.getAttribute(attr);
					break;
			}
		} else {
			switch (attr){
				case "parallax-speed":
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
			window.addEventListener("scroll", function(event) {
			    window.requestAnimationFrame(parallax);
			}, false);
			window.addEventListener("resize", function(event) {
			    window.requestAnimationFrame(parallax);
			}, false);
		}
	}

});