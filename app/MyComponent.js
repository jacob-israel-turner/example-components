var React = require('react');

var MyComponent = React.createClass({

	handleChange: function(e){
		console.log(e.target);
	},
	handleSubmit: function(e){
		e.preventDefault();
		var elements = e.target.elements;
		console.log(elements);
		// for(var i = 0; i < elements.length; i++){
		// 	console.log(elements)
		// }
	},
	render: function() {
		return (
			<div>
				<h3>My Component</h3>
				<form onChange={this.handleChange} onSubmit={this.handleSubmit} ref='formValue' >
					<input type='checkbox' value='HAHA!' >Test Laugh</input>
					<input type='checkbox' value='pizza' >Test Food</input>
					<button>Submit!</button>
				</form>
			</div>
		);
	}

});

module.exports = MyComponent;