# jCategorizer
This is a jquery responsive category manager that will render a given html ul list to an Android looking category manager. 

It is simple to use and easy to manage. 

Hope you enjoy this lightweight plugin!

## Installation
Include script and css after the jQuery library (unless you are packaging scripts somehow else):
```html
<script type="text/javascript" src="js/jCategorizer.js"></script>
<link rel="stylesheet" href="css/jCategorizer.css">
```
## Usage
### HTML: Create the category data structure

```html
<div id="jC-container">
	<ul>
		<li jc-desc="Chat"> <!-- Category Description-->
			<ul>
				<li jc-desc="Facebook"> <!-- Item Description-->
					<img src="pic/facebook.png"/> <!-- Item Icon-->
				</li>
				<li jc-desc="LinkedIn">
					<img src="pic/linkedin.png"/>
				</li>
				<li jc-desc="WeiChat">
					<img src="pic/weichat.jpg"/>
				</li>
				<li jc-desc="Twitter">
					<img src="pic/twitter.jpg"/>
				</li>
			</ul>
		</li>
		<li jc-desc="Game"> <!-- Category Description-->
			<ul>
				<li jc-desc="Need For Speed">
					<img src="pic/game1.png"/>
				</li>
				<li jc-desc="Star War III">
					<img src="pic/game2.png"/>
				</li>
				<li jc-desc="Chess">
					<img src="pic/game3.png"/>
				</li>
			</ul>
		</li>
	</ul>
</div>
```
### JS: Initialize jCategorizer for the category
```js
$("#jC-container").jCategorizer();
```

### Example
![alt tag](https://raw.githubusercontent.com/Dean-Xu/jCategorizer/master/example_1.png)
![alt tag](https://raw.githubusercontent.com/Dean-Xu/jCategorizer/master/example_2.png)

## License
This plugin is available under [the MIT license](http://mths.be/mit).
