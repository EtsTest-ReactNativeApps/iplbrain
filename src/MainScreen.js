import React,{Component} from 'react';

import {AppRegistry,StyleSheet,Image,BackHandler} from 'react-native';
import {
Text,
View,
Container,
Button,
Header,
Footer,
Content,
Body,
Left,
Right,
Card,
CardItem,
Thumbnail,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
window.navigator.userAgent = 'react-native';
import io from '../node_modules/socket.io-client/dist/socket.io'
import api from './utilities/api';

export default class MainScreen extends Component
{   
    constructor(){
        super();
       this.state={
         timestamp:'',
         query_text:'',
         response_text:'',
         response_time:'',
       }
    
      }
    
      
      componentWillMount(){
        
        api.getData().then((res)=>{
          this.setState({
            timestamp:res.timestamp,
            query_text:res.query_text,
            response_text:res.response_text,
            response_time:res.response_time,
          })
        })
    
      }
    
    render()
    {
        return(
            <Container>
                <Header style={{marginTop:24,backgroundColor:'#154360'}} >
                    <Left>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}} >
                            IPLBox
                        </Text>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <Content>
                    <Card>
                        <CardItem >
                            <Left>
                                <Thumbnail source={require('./imgs/User.png')} style={styles.title_thumbnail} />
                                <Text style={styles.title_text} >
                                    Query
                                </Text>
                            </Left>
                            <Body />
                            <Right style={styles.time_style} >
                                <Thumbnail source={require('./imgs/Time.png')} style={styles.time_thumbnail} />
                                <Text style={styles.time_text} > {this.state.timestamp} </Text>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.answer_item} >
                            <Text style={styles.answer_text} >
                               {this.state.query_text}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('./imgs/AlexaIPL.png')} style={styles.title_thumbnail} />
                                <Text style={styles.title_text}> Response </Text>
                            </Left>
                            <Body />
                            <Right style={styles.time_style}>
                                <Thumbnail source={require('./imgs/Time.png')} style={styles.time_thumbnail} />
                                <Text style={styles.time_text} > {this.state.timestamp}</Text>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.answer_item} >
                            <Text style={styles.answer_text} >
                              {this.state.response_text}
                            </Text>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Thumbnail source={require('./imgs/ResponseTime.png')} style={styles.title_thumbnail} />
                                <Text style={styles.title_text} >
                                    Response Time :
                                </Text>
                                <Text style={styles.answer_text} > {this.state.response_time} </Text>
                            </Left>
                        </CardItem>

                    </Card>

                    {/* <Card>
                        <CardItem >
                            <Left>
                                <Thumbnail source={require('./imgs/User.png')} style={styles.title_thumbnail} />
                                <Text style={styles.title_text} >
                                    Query
                                </Text>
                            </Left>
                            <Body />
                            <Right style={styles.time_style} >
                                <Thumbnail source={require('./imgs/Time.png')} style={styles.time_thumbnail} />
                                <Text style={styles.time_text} > 20:23:31 </Text>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.answer_item} >
                            <Text style={styles.answer_text} >
                                Alexa, ask IPLBox who has the highest ?
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('./imgs/AlexaIPL.png')} style={styles.title_thumbnail} />
                                <Text style={styles.title_text}> Response </Text>
                            </Left>
                            <Body />
                            <Right style={styles.time_style}>
                                <Thumbnail source={require('./imgs/Time.png')} style={styles.time_thumbnail} />
                                <Text style={styles.time_text} > 20:23:32 </Text>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.answer_item} >
                            <Text style={styles.error_text} >
                                Error Slot Missing from the utterance!
                            </Text>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Thumbnail source={require('./imgs/ResponseTime.png')} style={styles.title_thumbnail} />
                                <Text style={styles.title_text} >
                                    Response Time :
                                </Text>
                                <Text style={styles.answer_text} > 1 second </Text>
                            </Left>
                        </CardItem>

                    </Card> */}
                    
                </Content>
            </Container>

        );
    }
}
const styles = StyleSheet.create({

    title_thumbnail:{width:15,height:15},
    title_text:{fontSize:15,fontWeight:'bold'},
    time_style:{flexDirection:'row',justifyContent:'flex-end'},
    time_thumbnail:{width:10,height:10,marginRight:5},
    time_text:{fontSize:10},
    answer_item:{paddingTop:0},
    answer_text:{fontSize:16},
    error_text:{fontSize:16,color:'red'}
  });

  