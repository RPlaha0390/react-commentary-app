import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';

class App extends Component {
	render() {
		return (
			<div>
				Hello World!
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
