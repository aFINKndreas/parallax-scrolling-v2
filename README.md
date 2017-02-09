# Parallax Scrolling Framework
My first Framework. There is no perfect framework for parallax scrolling, therefore I built my own. The framework is really lightweight and customizable. You only have to include the "parallax.js" and "parallax.css" (found in /dist folder) file inside your HTML document. There is no external Libary required. 

Here you can see a [Demo](https://afinkndreas.github.io/parallax-scrolling-v2/demo/).

##Usage Example
```html
<parallax parallax-percent="0.25">
  <background>
  	<img src="img/demo0.jpg" alt="Text">
  </background>
  <content>
  	<h1 class="dark">Parallax Scrolling Demo</h1>
  </content>
</parallax>
```

```html
<parallax parallax-speed="0.25">
  <background>
    <video poster="vid/demo.jpg" playsinline autoplay muted loop>
      <source src="vid/demo.ogv" type="video/ogv">
      <source src="vid/demo.mp4" type="video/mp4">
    </video>
  </background>
  <content>
    <h1 class="dark">Parallax Scrolling Demo</h1>
  </content>
</parallax>
```
##Options
| Attribute | Values | Default | Required | Description |
|:---------:|:------:|:-------:|:--------:|:-----------:|
| parallax-speed | 0.0 - 1.0 | 0.25 | optional| The speed of the parallax effect. 0% means no parallax. 100% means the max. parallax. |

##Images

![Image 1](https://raw.githubusercontent.com/aFINKndreas/parallax-scrolling-v2/master/img/screen0.jpg "Image 1")
![Image 2](https://raw.githubusercontent.com/aFINKndreas/parallax-scrolling-v2/master/img/screen1.jpg "Image 2")
