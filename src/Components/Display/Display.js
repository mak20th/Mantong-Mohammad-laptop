import React, { Component } from 'react';

class Display extends Component{
    render(){
        console.log('hello 2 u from OS.js',this.props.myDisplay);
        const mainDisplay = this.props.myDisplay.map((display, index)=> {
            const selectedClass = display.name === this.props.userSelectedDisplay.name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass; 
        return (
            <li key={index} className="feature__item">
                <div className={featureClass}
                  //the keyword 'Processor' is used below'
                  onClick={e => this.props.handle_update_feature('Display', display)}>
                    { display.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(display.cost) })
                </div>
              </li>
        )    
        });
        
        return (
            <div>
                <div className="feature"><strong>Select a Display Operating system</strong></div>
                <div className="feature__name"></div>
                <ul className="feature__list">
                    { mainDisplay }
                </ul>
            </div>
        )
    }     
}

export default Display;