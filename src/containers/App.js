import React, { Component } from 'react';

import Commentary from './Commentary';
import '../styles/App.scss';

class App extends Component {
	render() {
		return (
			<div className="page">
				<div className="page__container">
					<Commentary />
				</div>
			</div>
		)
	}
}


export default App;
