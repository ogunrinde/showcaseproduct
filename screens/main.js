import React, { Component } from 'react';
import { StyleSheet,Button,TouchableNativeFeedback,Image, View,Dimensions,ActivityIndicator, TextInput,Text, Picker, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview';
import SelectInput from 'react-native-select-input-ios';
import { connect } from 'react-redux';
import { products } from '../action/action';
import { search } from '../action/action';
import { thisproduct } from '../action/action';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
const options = [{ value: 0, label: '0' }];
class MainScreen extends React.Component {  
    constructor(props){
      super(props);
      this.state = {
        siteurl: 'http://www.thelittlebigkidcompany.com.ng',
        products:[],
        width:'40%',
        height:'40%',
        imgheight:40,
        imgwidth:'80%',
        textheight:20,
        menuposition:0,
        menuimgwidth:0,
        menuimgheight:0,
        textinputwidth:0,
        textinputheight:0,
        textinputpadding:0,
        searchproducts:[],
        itemValue:'',
        textpadding:0,
        textheight:30,
        sortBy:50,
        textpaddingleft:10,
        textsize:12,
        header:70,
        producthead:18,
        pickerwidth:150,
        pickerstart:'20%',
        isFetching:false,
        sortbyName:'',
        access_token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5ODgwMGJkOGFkMjExMzdkMTY0NGQ3YTljZGU2YjM1MWRiZGFlN2YxNWU4NGQzNDY2NDNiMWI4ZDUzYjc4ZTc4ZTc5YTUwNWVjNDIyNmJmIn0.eyJhdWQiOiIzIiwianRpIjoiMjk4ODAwYmQ4YWQyMTEzN2QxNjQ0ZDdhOWNkZTZiMzUxZGJkYWU3ZjE1ZTg0ZDM0NjY0M2IxYjhkNTNiNzhlNzhlNzlhNTA1ZWM0MjI2YmYiLCJpYXQiOjE1NzQ5Mjg5MzksIm5iZiI6MTU3NDkyODkzOSwiZXhwIjoxNjA2NTUxMzM5LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.r1pf9ZHhZWYF27c42Ny2Glt63Jo5bdLdAObKOkgg19PYehZSZdPH_MdpvMMhDlOyYn--BDZJDMIxAxy8nOo5rsSISYwP70delmND0WS-t3rTtJ6Gw0F2ehDT3BE0QROsUiWOKH__YwkSEUm6-ndAKUsDddA4ZQyVVNnnIE1ItIeTHozrgy2j55hKLwaPIUUkE6wMuLJ5l5b5i8GyI-IR9k7wQvbIoiFYZvjNk2Vry0Sdaw8DKp7zZabFKfRsY5YHWHq--ZJy7Ef41DmZZxmJ3d_-YfAimkcvWOIE8ifGIqayq1NOuV2UfL58iaRAGUCOJjtV6bn5i7Wd-eM_2g2LCtFr2itQ4ql3cpqqQLL84foyWuGbL2lBrBz5JEaerWlJO_p1Ivo-fmqh6-ONeHO_mdbF-aFzB3tzBh4MERxDJ1X6SYSoYpYGTWDjiN7zuVsTw_nw1ty9lCsircqgCG0DxZ4Lk67Q9IXw-gKKvzs1GP4DqGGFbPQzttqZFQlfFferE4Bx1WAKDTRoIM0mNqJGfw7v8LFMkOfduL-kNYxcRAaFP_H2wCgGElmtw5Z-MO72_RJK3YiTupA1fb1mm8ywwUZ9etk5pqrRZGQQNcEJtNoOLMWIIJ7n7sU5kvVKZk_7qxegdfvlKozTk2nuMq_1ooTCjVjeO92DOA34FXwXhcw"
      }
    }
    openDrawer = () => {
      this.props.navigation.openDrawer();
    }
    componentDidMount() {
        if(Dimensions.get('window').width <= 400){
          let height = (Dimensions.get('window').height / 3) - 40;
          let imgheight = (parseInt(height) * 2) / 3;
          let textheight = (parseInt(height) * 1) / 3;
          this.setState({menuposition:5,menuimgwidth:50,menuimgheight:20,textpadding:0});
          this.setState({textinputheight:30,textinputwidth:'100%',textpadding:2,textsize:12,textpaddingleft:10});
          this.setState({imgwidth:'80%', width:'47%',height:height,imgheight:imgheight, textheight:30});
        }else if(Dimensions.get('window').width > 400 && Dimensions.get('window').width <= 560){
          let height = (Dimensions.get('window').height / 3) - 40;
          let imgheight = (parseInt(height) * 2) / 3;
          let textheight = (parseInt(height) * 1) / 3;
          this.setState({menuposition:5,menuimgwidth:50,menuimgheight:20,textpadding:0});
          this.setState({textinputheight:30,textinputwidth:'100%',textpadding:2,textsize:12,textpaddingleft:10});
          this.setState({imgwidth:'60%', width:'47%',height:height,imgheight:imgheight, textheight:30});
        }
        else if(Dimensions.get('window').width > 560){
          let height = Dimensions.get('window').height / 3;
          let imgheight = (parseInt(height) * 2) / 3;
          let textheight = (parseInt(height) * 1) / 3;
          this.setState({menuposition:50,menuimgwidth:100,menuimgheight:50,textpadding:0,textsize:18,textpaddingleft:0});
          this.setState({textinputheight:10,textinputwidth:'100%',textpadding:2,textheight:50,sortBy:90,producthead:25,header:90});
          this.setState({imgwidth:'80%',width:'23%',height:height,pickerstart:'40%',pickerwidth:200,imgheight:imgheight});
        }
        this.getproducts();
    }
    async getproducts(){
      this.setState({isFetching:true});
      await fetch(`${this.state.siteurl}/api/auth/products`,{
          method:'GET',
          headers:{
              'Accept': 'application/json',
              'Content-Type':'application/json',
              'Authorization': `${this.state.access_token}`
          }
      })
        .then(data => data.json())
        .then(data => {
          this.setState({isFetching:false});
            let dat = {products:data.products};
            this.props.dispatch(products(dat));
            this.setState({products:data.products,searchproducts:data.products});
            //console.error(this.props.reducer.searchproducts);
        })
        .catch(err => {
          alert(err.toString());
        });
    }
    onValueChange = (itemValue)=>{
      alert(itemValue);
    }
    getCost = (val)=>{
      let searchprod = this.props.reducer.searchproducts.slice();
      if(val == 'Lowest - Highest')
       searchprod.sort((a,b) => (parseFloat(a.price) > parseFloat(b.price)) ? 1 : -1);
      else if(val == 'Highest - Lowest') 
       searchprod.sort((a,b) => (parseFloat(a.price) < parseFloat(b.price)) ? 1 : -1);
       let data = {products:searchprod};
       this.props.dispatch(search(data));  
       this.setState({itemValue:val})
    }
    getName = (val)=>{
      let searchprod = this.props.reducer.searchproducts.slice();
      if(val == 'Ascending')
       searchprod.sort((a,b) => (a.name > b.name) ? 1 : -1);
      else if(val == 'Descending') 
       searchprod.sort((a,b) => (a.name < b.name) ? 1 : -1);
       let data = {products:searchprod};
       this.props.dispatch(search(data));  
       this.setState({sortbyName:val})
    }
    getText = (val) => {
      let searchproduct = [];
      for(let f  = 0; f < this.props.reducer.products.length; f++){
          let index = this.props.reducer.products[f].name.toLowerCase().search(val.toLowerCase());
          
          if(index > -1){
              searchproduct.push(this.props.reducer.products[f]);
          }
      }
      if(val == ''){
        let data = {products:this.props.reducer.products};
        this.props.dispatch(search(data));
      }else{
        let data = {products:searchproduct};
        //console.error(data);
        this.props.dispatch(search(data));
      }
      //console.error(this.props.reducer.searchproducts);
      //this.setState({searchproducts:searchproduct});
      
    }
    details = async (product) =>{
      let data = {product: product};
      await this.props.dispatch(thisproduct(data));
      this.props.navigation.navigate('about');
      //this.props.navigation.navigate('Details')
      //console.error(this.props.reducer.product);
    }
    render() {

      return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',height:this.state.header,alignItems:'center',backgroundColor:'#fff'}}>
                <View style={{flex:1}}>
                  <Ionicons name='md-menu' onPress = {this.openDrawer} size={35} color='#000' style={{marginStart:this.state.menuposition}}/>
                </View>
                <View style={{flex:1}}>
                   <Image
                    source={require('../asset/images/christmas.png')}
                    style={{width:this.state.menuimgwidth,height:this.state.menuimgheight, alignSelf:'center',margin:5}}
                    />
                </View>
                <View style={{flex:4}}>
                   <TextInput
                   onChangeText = {(text)=> this.getText(text)}
                   placeholder="Search for products"
                    style={{width:this.state.textinputwidth,
                            fontSize:this.state.textsize,
                            padding:this.state.textpadding,
                            fontFamily:"Poppins-SemiBold",
                            paddingLeft:this.state.textinputpadding,
                            height:this.state.textinputheight, 
                            alignSelf:'center',margin:0, 
                            height:this.state.textheight,
                            borderWidth:1.1,borderColor:'#4F4F4F',
                            paddingLeft:50,borderRadius:40}}
                    />
                </View>
                <View style={{flex:1}}>
                   <Image
                    source={require('../asset/images/christmas.png')}
                    style={{width:this.state.menuimgwidth,height:this.state.menuimgheight, alignSelf:'center',margin:5}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row',height:this.state.sortBy,alignItems:'center',backgroundColor:'#F3F6F8',fontFamily:'poppins-Black'}}>
                
                <View style={{flexDirection:'row', marginStart:this.state.pickerstart}}>
                  
                
                <Picker
                    style={{height: 50, width:this.state.pickerwidth,color:'#000', borderColor:'red',borderWidth:12,fontSize:90}}
                    placeholder="Select your SIM"
                    selectedValue={this.state.itemValue}  
                    onValueChange={(itemValue, itemPosition) =>  
                      this.getCost(itemValue) }
                    >
                    <Picker.Item label="Sort by Price" value="" />
                    <Picker.Item label="Lowest - Highest" value="Lowest - Highest" />
                    <Picker.Item label="Highest - Lowest" value="Highest - Lowest" />
                </Picker>
                <Picker
                    style={{height: 50, width: this.state.pickerwidth,color:'#000', borderColor:'red',borderWidth:12,fontSize:90}}
                    placeholder="Select your SIM"
                    selectedValue={this.state.sortbyName}  
                    onValueChange={(itemValue, itemPosition) =>  
                      this.getName(itemValue) }
                    >
                    <Picker.Item label="Sort by Name" value="" />
                    <Picker.Item label="Ascending" value="Ascending" />
                    <Picker.Item label="Descending" value="Descending" />
                </Picker>
                </View>
                
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
            <View>
              <View style={{padding:10,marginTop:10}}>
                 <Text style={{color:'#35A4F4', fontSize:this.state.producthead,marginLeft:7,fontFamily:'Poppins-SemiBold'}}>Products</Text>
                 {
                   this.state.isFetching == true &&
                  <ActivityIndicator color = "#35A4F4" size="large"/>
                 }
                 
                 <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                 {
                   this.props.reducer.searchproducts.map((product) =>
                   <TouchableNativeFeedback key = {product.id} value = {product.id} onPress = {() => this.details(product)}>
                   <CardView 
                            
                            style={{marginStart:7,marginBottom:7,padding:10,alignSelf:'center',width:this.state.width,height:this.state.height}}
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}> 
                            <View style={{justifyContent:"center",height:this.state.imgheight}}>
                              <Image
                              source={{uri: `${this.state.siteurl+'/public/images/'+product.picture.split('|')[0]}`}}
                              style={{width:this.state.imgwidth,aspectRatio:1, alignSelf:'center',margin:5}}
                              />   
                            </View>  
                            <View style={{justifyContent:"center",height:this.state.textheight,marginTop:8}}>
                              
                                <Text numberOfLines={1} style={{textTransform:'capitalize', alignSelf:'center',padding:0,fontFamily:'Poppins-Regular',fontSize:14}}>
                                    {product.name}
                                </Text>
                                <Text style={{alignSelf:'center',color:'#EC5198',fontFamily:'Poppins-Regular', fontSize:15}}>&#x20A6; {product.price}</Text>
                              
                              
                            </View>
                             
                            
                    </CardView>
                    </TouchableNativeFeedback>
                  )
                 }  
                 {
                   this.props.reducer.searchproducts.length == 0 && this.state.isFetching == false &&
                   <Text style={{color:'#303030',fontFamily:'Poppins-Regular',fontSize:20}}>No Item found</Text>
                 }
                 
                 
                      
                 </View>
              </View>
            </View>
            </ScrollView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#fff'
    }
  });
  const mapStateToProps = state => {
    return {
        reducer : state.Reducer
    }
  };
  export default connect(mapStateToProps)(MainScreen);
