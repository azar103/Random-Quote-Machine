import * as React from 'react';
import { View, Button,Text } from 'react-native';
import { Constants } from 'expo';
import Quote from './components/Quote';



export default class App extends React.Component {
  constructor(props){
  super(props);
  this.state={ index : 0 };
  this._generateQuote = this._generateQuote.bind(this)
}
 _generateQuote(max){
  this.setState({
    index: Math.floor(Math.random() * Math.floor(max))
  })
}
  render() {
    return (
      <Quote index={this.state.index} 
            generateQuote={this._generateQuote}  
            />
    );
  }
}


