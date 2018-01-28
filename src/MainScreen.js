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


export default class MainScreen extends Component
{   
    state={
        timestamp: 'dash',
        query_text: 'dash',
        response_text: 'dash',
        response_time: 'dash',
        is_error_occured: 'dash'
    }

    constructor(){
        super();
         this.socket=io('https://bot.camouflage81.hasura-app.io/test_websocket',{jsonp: true});
        /* this.socket.on('intentRequest',()=>{
            this.setState({timestamp: query_log.timestamp});
        }) */

        
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
                                <Text style={styles.time_text} > 20:23:31 </Text>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.answer_item} >
                            <Text style={styles.answer_text} >
                                Alexa, ask IPLBox who has the highest strike rate ?
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
                            <Text style={styles.answer_text} >
                                XYZ Batsman has the highest strike rate.
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

                    </Card>

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

                    </Card>
                    {/* <Card>
                        <CardItem>
                        <Text> {this.state.timestamp}</Text>
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

  