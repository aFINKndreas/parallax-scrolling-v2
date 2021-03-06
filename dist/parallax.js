/*
Parallax Scrolling Framework - a lightweight and customizable framework for parallax scrolling
Version: 0.2.09-02-2017
Author: Andreas Fink 
Website: https://afink.at
Github: https://github.com/aFinkndreas
*/
document.addEventListener("DOMContentLoaded", function() {

	var defaults = {
		parallaxPercent: 0.25
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
				var perc = getAttr(globals.obj[i],'parallax-speed')/2;
				var offset = -offsetTempObj.top*perc;
				var bg = getAttr(globals.obj[i],'parallax-bg');
				if (globals.obj[i].getElementsByTagName('background').length > 0){
					globals.obj[i].getElementsByTagName('background')[0].style.height = "calc( 100% * (1 + "+perc+"))";
					globals.obj[i].getElementsByTagName('background')[0].style.minHeight = "calc( 100% * (1 + "+perc+"))";
					globals.obj[i].getElementsByTagName('background')[0].style.transform = "translate3d(0,"+ offset +"px, 0)";
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
					return getValueWithinRange(obj.getAttribute(attr),defaults.parallaxPercent,0,1);
					break;
				default:
					return obj.getAttribute(attr);
					break;
			}
		} else {
			switch (attr){
				case "parallax-speed":
					return defaults.parallaxPercent;
					break;
				default:
					return "";
					break;
			}
		}
	};

	window.requestAnimFrame = function(){
	    return (
	        window.requestAnimationFrame       || 
	        window.webkitRequestAnimationFrame || 
	        window.mozRequestAnimationFrame    || 
	        window.oRequestAnimationFrame      || 
	        window.msRequestAnimationFrame     || 
	        function(callback){
	            window.setTimeout(callback, 1000 / 60);
	        }
	    );
	}();

	function draw(){
		if (window.requestAnimationFrame && document.documentElement.classList){
			window.addEventListener("scroll", function(event) {
			    window.requestAnimFrame(parallax);
			}, false);
			window.addEventListener("resize", function(event) {
			    window.requestAnimFrame(parallax);
			}, false);
		}
	}

});