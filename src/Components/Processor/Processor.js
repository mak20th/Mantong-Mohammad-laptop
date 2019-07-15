import React, { Component } from 'react';

class Processor extends Component{
    render(){
        //const options = this.props.features[key].map((item, index) => {
        //const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
        //const featureClass = 'feature__option ' + selectedClass;
        console.log('hello 2 u from Processor.js',this.props.myProcessors);
        const mainProcessors = this.props.myProcessors.map((processor, index)=> {
            const selectedClass = processor.name === this.props.userSelected.name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass; 
        return (
            <li key={index} className="feature__item">
                <div className={featureClass}
                  //the keyword 'Processor' is used below'
                  onClick={e => this.props.handle_update_feature('Processor', processor)}>
                    { processor.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(processor.cost) })
                </div>
              </li>
        )    
        });
        
        return (
            <div>
                <div className="feature"><strong>Select a processor</strong></div>
                <div className="feature__name"></div>
                <ul className="feature__list">
                    { mainProcessors }
                </ul>
            </div>
        )
    }     
}

export default Processor;