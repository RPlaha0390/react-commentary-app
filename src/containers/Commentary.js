import React, { Component, Fragment } from 'react';

class Commentary extends Component {
	/**
	 * constructor
	 */
	constructor() {
		/**
		 * Use super() to initialise 'this'
		 */
		super();

		this.state = {
			commentaryFeed: [],
			keyMoments: []
		}
	}

	/**
	 * Use componentDidMount lifecycle hook to execute
	 * our fetch method that retrieves the commentary feed from
	 * our endpoint
	 * @return [Array]
	 */
	componentDidMount() {
		fetch('data/feed.json')
			.then(res => res.json())
			.then(feed => this.setState({
				/**
				 * Create commentaryFeed state
				 */
				commentaryFeed: feed[0].commentary,
				/**
				 * Create keyMoments state by filtering through the objects and find any 
				 * keyMoment keys that contain a value of true
				 */
				keyMoments: feed[0].commentary.filter(obj => {
				  return obj.isKey === true
				})
			}));
	}

	/**
   * render
   * @return {JSX}
   */
	render() {
		console.log(this.state.commentaryFeed);
		console.log(this.state.keyMoments);

		return (
			<Fragment>
				<p>Hello World from Commentary.js</p>
			</Fragment>
		)
	}
}


export default Commentary;
