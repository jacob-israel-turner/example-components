var React = require('react');
var MyComponents = require('./MyComponentObj')

var App = React.createClass({
	render: function() {
		var MyComponent = MyComponents.MyComponent // Works
		// var MyComponent = MyComponents['MyComponent'] // Also works
		console.log(MyComponent);
		return (
			<div>
				<h1>
					Hello, world!
					<MyComponent />
				</h1>		
			</div>
		);
	}
})

React.render(<App />, document.getElementById('app'));