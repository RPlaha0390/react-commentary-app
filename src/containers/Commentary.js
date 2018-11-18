import React, { Component, Fragment } from 'react';

import Timeline from '../components/Timeline';
import List from '../components/List';

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

    this.setActive = this.setActive.bind(this);
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
   * Set active class to element if element id is equal to event id
   * @param 'string'
   */
  setActive(event) {
    const keyMomentsId = parseInt(event.currentTarget.getAttribute('data-key-moments-id'));
    const activeClass = 'timeline__group--active';
    let timelineId;

    document.querySelectorAll('.timeline__group').forEach((element, index) => {
      timelineId = parseInt(element.getAttribute('data-timeline-id'));
      keyMomentsId === timelineId ? 
        element.classList.add(activeClass) 
      : element.classList.remove(activeClass);
    });

    /**
     * Scroll to active class
     */
    document.querySelector('.timeline__group--active').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    return (
      <Fragment>
        {
          this.state.commentaryFeed && (
            <div className="timeline">
              <h1 className="timeline__heading">Live Commentary</h1>
              <div className="timeline__wrapper">
                {
                  this.state.commentaryFeed.map((event, index) => 
                    <Timeline 
                      key={ index }
                      event={ event }
                    />
                  )
                }
              </div>
            </div>
          )
        }
        { 
          this.state.keyMoments && ( 
            <div className="list">
              <h1 className="list__heading">Key Moments</h1>
              <div className="list__wrapper">
                {
                  this.state.keyMoments.map((moment, index) => 
                    <List 
                      key={ index }
                      keyMoment={ moment }
                      onClick={ this.setActive }
                    />
                  )
                }
              </div>
            </div>
          )
        }
      </Fragment>
    )
  }
}

export default Commentary;
