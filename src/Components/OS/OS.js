import React, { Component } from 'react';

class OS extends Component{
    render(){
        //const options = this.props.features[key].map((item, index) => {
        //const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
        //const featureClass = 'feature__option ' + selectedClass;
        console.log('hello 2 u from OS.js',this.props.myOS);
        const mainOS = this.props.myOS.map((os, index)=> {
            const selectedClass = os.name === this.props.userSelectedOS.name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass; 
        return (
            <li key={index} className="feature__item">
                <div className={featureClass}
                  //the keyword 'Processor' is used below'
                  onClick={e => this.props.handle_update_feature('OS', os)}>
                    { os.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(os.cost) })
                </div>
              </li>
        )    
        });
        
        return (
            <div>
                <div className="feature"><strong>Select an Operating system</strong></div>
                <div className="feature__name"></div>
                <ul className="feature__list">
                    { mainOS }
                </ul>
            </div>
        )
    }     
}

export default OS;