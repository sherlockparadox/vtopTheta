import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import TabsExampleSwipeable from './components/tab_nav'
import VerticalNonLinear from './components/stepper_timetable'
import AutoCompleteExampleMenuProps from './components/autocomplete_search'
 
class App extends Component {
    //Card
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
                };
        }
    
    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
        };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
        };

    handleExpand = () => {
        this.setState({expanded: true});
        };

    handleReduce = () => {
    this.setState({expanded: false});
        };

    render() {
        return (
        <MuiThemeProvider>
            
            <div class="Wrapper01">
                
                <div class="Premium">
            <i className="fa fa-search" style={{color: 'white'}}></i>
                    <div class="search_size">
                        <AutoCompleteExampleMenuProps />
                    </div> 
                </div>
                
                <div class="menu">
                    <TabsExampleSwipeable />
                </div>
                
                <div class="right-box">
                    <VerticalNonLinear />
                </div>
            
                
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
