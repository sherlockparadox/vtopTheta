import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import logo from './logo.svg';
import './App.css';
import TabsExampleSwipeable from './tab_nav'




const style = {
  margin: 12,
};
 
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
                    </div>
                
                <div class="menu">
                      <TabsExampleSwipeable />
                </div>
                
                <div class="right-box">
                    </div>
            
                
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
