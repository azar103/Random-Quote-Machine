import * as React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import quotes from '../Helpers/QuotesData'
 class Quote extends React.Component{
   render() {
     const index = this.props.index
     return(
        <View style={styles.main_style}>
        <Text h1 style={styles.text_style}>Random Quote Machine</Text>
        <Button  title="Click Me to get random quote" onPress={()=>{this.props.generateQuote(quotes.length)}} />
        <View style={styles.quotes_style}>
        <Text style={styles.author_style}>{quotes[index].author}</Text>
        <Text style={styles.citation_style}>{quotes[index].quote}</Text>
        </View>
        </View>
     );
   }
}
const styles=  StyleSheet.create({
  main_style:{
     flex: 1,
     marginTop:120,
     alignItems: 'center',
  },
  text_style:{
   fontSize: 20
  },
  quotes_style:{
    fontSize: 15,
    marginTop:22,
    paddingLeft: 30,
    paddingRight: 30, 
    alignItems: 'center',
    textAlign:'center'
  },
  author_style:{
    color: '#00F', 
    fontSize: 22
  },
  citation_style:{
    textAlign:'center',
    fontSize: 22,
    fontStyle: 'italic'
  }
 

})

export default Quote