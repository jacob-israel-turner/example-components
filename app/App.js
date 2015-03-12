var React = require('react');
var MyComponents = require('./MyComponentObj')
var Firebase = require('firebase');
var ref = new Firebase('https://brilliant-inferno-4121.firebaseio.com');
var myUtils = require('utils/my-util');

// console.log(__dirname)

console.log(myUtils)

var App = React.createClass({
	handleLogin: function(e){
		e.preventDefault();
		ref.authWithOAuthPopup("github", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	},
	render: function() {
		// var MyComponent = MyComponents.MyComponent // Works
		// var MyComponent = MyComponents['MyComponent'] // Also works
		var MyComponentsArray = Object.keys(MyComponents).map(function(item, index){
			var Component = MyComponents[item];
			return <Component key={item} />
		})
		return (
			<div>
				<h1>
					Hello, world!
					{MyComponentsArray}
					<button onClick={this.handleLogin} >Login with Github!</button>
				</h1>		
			</div>
		);
	}
})

React.render(<App />, document.getElementById('app'));