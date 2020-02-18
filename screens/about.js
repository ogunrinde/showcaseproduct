import React, { Component } from 'react';
import { StyleSheet,Button,Image,View,Text,Dimensions,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview';
import { connect } from 'react-redux';


class AboutScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      siteurl: 'http://www.thelittlebigkidcompany.com.ng',
      products:[],
      width:'40%',
      height:'40%',
      imgheight:40,
      textheight:20,
      menuposition:0,
      menuimgwidth:0,
      menuimgheight:0,
      textinputwidth:0,
      textinputheight:0,
      textinputpadding:0,
      searchproducts:[],
      itemValue:'',
      isFetching:false,
      sortbyName:'',
  }
  }
    static navigationOptions = {
      drawerLabel: 'About',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../asset/images/logo.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
    componentDidMount() {
      if(Dimensions.get('window').width <= 560){
        let height = Dimensions.get('window').height / 3;
        let menuimgwidth = Dimensions.get('window').width / 2;
        let menuimgheight = Dimensions.get('window').height / 2;
        this.setState({menuposition:5,menuimgwidth:'80%',menuimgheight:160});
        this.setState({textinputheight:30,textinputwidth:'100%',textinputpadding:2});
        this.setState({width:'47%',height:height,imgwidth:'60%'});
      }else if(Dimensions.get('window').width > 560){
         this.setState({width:'30%',height:'30%',imgwidth:'25%'});
      }
  }
    render() {
      return (
        <ScrollView showsVerticalScrollIndicator ={false}>
          <View style={styles.container}>
            <View style={{flexDirection:'row',height:20,marginTop:20,alignItems:'center'}}>
                <View style={{flex:1}}>
                  <Ionicons name='ios-arrow-back' onPress = {()=>this.props.navigation.navigate('main')} size={35} color='#000' style={{marginStart:10}}/>
                </View>
                <View style={{flex:2}}>
                </View>
            </View>
            <View style={{alignItems:'center',padding:7}}>
                <View style={{flex:1}}>
                   <Text style={{marginTop:10,color:'#35A4F4',textAlign:'justify',alignSelf:'center', fontSize:20, fontFamily:'Poppons-MediumBold'}}>{this.props.reducer.product.name}</Text>
                </View>
            </View>
            <View>
                   <Image
                      source={{uri: `${this.state.siteurl+'/public/images/'+this.props.reducer.product.picture.split('|')[0]}`}}
                      style={{width:this.state.imgwidth,aspectRatio:1, alignSelf:'center',margin:5}}
                    /> 
                   
                    <CardView
                            style={{marginStart:7,marginTop:10,marginBottom:7,padding:30,alignSelf:'center',width:this.state.imgwidth}}
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>  
                            <View style={{justifyContent:"center",height:this.state.textheight}}>
                              <Text style={{alignSelf:'center',color:'#C1C1C1',padding:0,fontFamily:'Poppins-SemiBold',fontSize:16}}>
                                  Price
                              </Text>
                              <Text style={{alignSelf:'center',color:'#EC5198',fontFamily:'Poppins-Bold', fontSize:19}}>NGN {this.props.reducer.product.price}</Text>
                            </View> 
                            
                    </CardView>
            <View style={{padding:10}}>
               <Text style={{color:'#303030', fontSize:20, alignSelf:'center', marginTop:50,fontFamily:'Poppins-Bold'}}>About the Product</Text>
               <Text style={{fontSize:15,textAlign:'justify',color:'#303030', fontFamily:'Poppins-Regular'}}>
                  {this.props.reducer.product.description}
               </Text>
            </View>
            </View>
            
        </View>
        </ScrollView>
      );
    }
  }
  const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
  });
  const mapStateToProps = state => {
    return {
        reducer : state.Reducer
    }
  };
  export default connect(mapStateToProps)(AboutScreen);
