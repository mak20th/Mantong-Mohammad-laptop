//Master Component. Star the whole building off
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Display from './Components/Display/Display';
import OS from './Components/OS/OS';
import Processor from './Components/Processor/Processor';
import Summary from './Components/Summary/Summary';
import Total from './Components/Total/Total';
import Video from './Components/Video/Video';

class App extends Component {
  //we create a state here and in order to have access to 'this' we  write super()
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        OS: {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        VideoCard: {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }
  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  // a function to add feature and then  update the react state using setState()
  render() {
    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 

console.log('from app.js calling props.js ', this.props);
console.log('from app.js calling props.features.Processor ', this.props.features.Processor);
console.log('from app.js calling state.selected ', this.state.selected.Processor)

console.log('from app.js calling props.features.OS ', this.props.features['Operating System']);

    return(      
      <div className="App">        
        <Header/>
        <main>
          <section className='main_form'>
            <h3>TECH SPECS AND customIZATIONS</h3>

            <section id='processor'>
              <Processor 
            //three things that each processor component is made of. Name, whether it;s selected or not, and click function
                myProcessors = {this.props.features.Processor}
                userSelected= {this.state.selected.Processor}
                //lets pass the function updateFeature() as a prop to all the features
                handle_update_feature = {(processors, value)=> this.updateFeature(processors, value)}
              />
            </section>

            <section id='os'>
              <OS
                myOS = {this.props.features['Operating System']}
                userSelectedOS= {this.state.selected.OS}
                handle_update_feature = {(OS, value)=> this.updateFeature(OS, value)}
              />
            </section>

            <section id='video'>
              <Video
                myVideoCard = {this.props.features['Video Card']}
                userSelectedVideo= {this.state.selected.VideoCard}
                handle_update_feature = {(Video, value)=> this.updateFeature(Video, value)}
              /> 
            </section>
            <section id='display'>
              <Display
                myDisplay = {this.props.features.Display}
                userSelectedDisplay= {this.state.selected.Display}
                handle_update_feature = {(Display, value)=> this.updateFeature(Display, value)}
              />
            </section>      
          </section>            
        </main>
        <section className='main_summary'>
            <Summary selected={this.state.selected} />
            <Total total={total} />
        </section>       
      </div>
    )
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     selected: {
  //       Processor: {
  //           name: '17th Generation Intel Core HB (7 Core with donut spare)',
  //           cost: 700
  //         },
  //       "Operating System": {
  //           name: 'Ubuntu Linux 16.04',
  //           cost: 200
  //         },
  //       "Video Card":{
  //           name: 'Toyota Corolla 1.5v',
  //           cost: 1150.98
  //         },
  //       Display: {
  //           name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
  //           cost: 1500
  //         }
  //     }
  //   }
  // }

  // updateFeature(feature, newValue) {
  //   const selected = Object.assign({}, this.state.selected);
  //   selected[feature] = newValue;
  //   this.setState({
  //     selected
  //   });
  // }

  // render() {
  //   const summary = Object.keys(this.state.selected)
  //         .map(key => <div className="summary__option" key={key}>
  //           <div className="summary__option__label">{key}  </div>
  //           <div className="summary__option__value">{this.state.selected[key].name}</div>
  //           <div className="summary__option__cost">
  //             { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  //                 .format(this.state.selected[key].cost) }
  //           </div>
  //       </div>)

  //   const total = Object.keys(this.state.selected)
  //         .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


  //   const features = Object.keys(this.props.features)
  //         .map(key => {
  //           const options = this.props.features[key].map((item, index) => {
  //             const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
  //             const featureClass = 'feature__option ' + selectedClass;
  //             return <li key={index} className="feature__item">
  //               <div className={featureClass}
                  
  //                 onClick={e => this.updateFeature(key, item)}>
  //                   { item.name }
  //                   ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  //                     .format(item.cost) })
  //               </div>
  //             </li>
  //           });

  //           return <div className="feature" key={key}>
  //             <div className="feature__name">{key}</div>
  //             <ul className="feature__list">
  //               { options }
  //             </ul>
  //           </div>
  //         });      

  //   return (
  //     <div className="App">
  //       <header>
  //         <h1>ELF Computing</h1>
  //         <h3>Laptops</h3>
  //         <h5>Customize your laptop</h5>  
  //       </header>      
  //       <main>
  //         <section className="main__form">
  //           <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
  //           { features }
  //         </section>
  //         <section className="main__summary">
  //           <h3>NEW GREENLEAF 2018</h3>
  //           {summary}
  //           <div className="summary__total">
  //             <div className="summary__total__label">Your Price: </div>
  //             <div className="summary__total__value">
  //             { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  //                 .format(total) }
  //             </div>
  //           </div>
  //         </section>
  //       </main>
  //     </div>
  //   );
  // }
}

export default App;  
