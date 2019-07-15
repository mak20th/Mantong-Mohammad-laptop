import React, { Component } from 'react';

class Video extends Component{
    render(){
        console.log('hello 2 u from OS.js',this.props.myVideoCard);
        const mainDisplay = this.props.myVideoCard.map((video, index)=> {
            const selectedClass = video.name === this.props.userSelectedVideo.name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass; 
        return (
            <li key={index} className="feature__item">
                <div className={featureClass}
                  //the keyword 'Processor' is used below'
                  onClick={e => this.props.handle_update_feature('Video', video)}>
                    { video.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(video.cost) })
                </div>
              </li>
        )    
        });
        
        return (
            <div>
                <div className="feature"><strong>Select a Video Card</strong></div>
                <div className="feature__name"></div>
                <ul className="feature__list">
                    { mainDisplay }
                </ul>
            </div>
        )
    }     
}

export default Video;