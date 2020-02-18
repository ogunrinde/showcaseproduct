import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { byAge } from '../action/action';
import { byCategory } from '../action/action';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { search } from '../action/action';

class DrawerComponent extends React.Component {
    constructor(props){
        super(props);
    }
    search = async (max) => {
        let data = {by_age:max};
        await this.props.dispatch(byAge(data));
        this.sortByAge(max);
        this.props.navigation.closeDrawer();
        //alert(this.props.reducer.by_age);
    }
    closeDrawer = () => {
        this.props.navigation.closeDrawer();
      }
    category = async (cate) => {
        let data = {by_category:cate};
        await this.props.dispatch(byCategory(data));
        this.sortByCategory(cate);
        //this.getText(cate);
        //alert(this.props.reducer.by_category);
        this.props.navigation.closeDrawer();
    }
    sortByAge = (val) => {
        let searchproduct = [];
        for(let f  = 0; f < this.props.reducer.products.length; f++){
            let index = this.props.reducer.products[f].category.toLowerCase().search(val.toLowerCase());
            
            if(index > -1){
                searchproduct.push(this.props.reducer.products[f]);
            }
        }
        if(val == '' || val == 'all'){
          let data = {products:this.props.reducer.products};
          this.props.dispatch(search(data));
        }else{
          let data = {products:searchproduct};
          //console.error(data);
          this.props.dispatch(search(data));
        }
    }
    sortByCategory = (val) => {
        let searchproduct = [];
        for(let f  = 0; f < this.props.reducer.products.length; f++){
            let index = this.props.reducer.products[f].gender.toLowerCase().search(val.toLowerCase());
            
            if(index > -1){
                searchproduct.push(this.props.reducer.products[f]);
            }
        }
        if(val == '' || val == 'all'){
          let data = {products:this.props.reducer.products};
          this.props.dispatch(search(data));
        }else{
          let data = {products:searchproduct};
          //console.error(data);
          this.props.dispatch(search(data));
        }
    }
    render (){
        return (
            <ScrollView style={{backgroundColor:'#35A4F4',height:'100%'}}>
               <View style={{backgroundColor:'#35A4F4',height:'100%'}}>
                <View style={{flexDirection:"row", justifyContent:"flex-end",width:'100%',padding:10}}>
                <Ionicons name='md-close' onPress = {this.closeDrawer} size={35} color='#000' style={{marginStart:20}}/>
                </View>
                <View>
                    <Text style={styles.header}>
                        By Age
                    </Text>
                    <TouchableOpacity onPress = {()=> this.search('all')}>
                        <Text  style={styles.others}>
                            All
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=> this.search('0-3years')}>
                        <Text  style={styles.others}>
                            0 - 3 years
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.search('4-6years')}>
                        <Text style={styles.others}>
                            4 - 6 years
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>this.search('7-9years')}>
                        <Text style={styles.others}>
                            7 - 9 years
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress = {()=>this.search('10-12years')}>
                        <Text style={styles.others}>
                            10 - 12 years
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{marginTop:20}}>
                    <Text style={styles.header}>
                        Gender
                    </Text>
                    <TouchableOpacity onPress = {()=>this.category('all')}>
                    <Text style={styles.others}>
                        All
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.category('male')}>
                    <Text style={styles.others}>
                        Male
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.category('female')}>
                    <Text style={styles.others}>
                        Female
                    </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
  header:{
    color:'#fff',borderBottomWidth:1.1,borderBottomColor:'#fff',padding:10,paddingTop:20,paddingLeft:20,fontSize:20,
    fontFamily: 'Poppins-MediumBold'
  },
  others:{
    color:'#fff',padding:10,paddingBottom:15,paddingLeft:20, fontSize: 15,
    fontFamily:'Poppins-Regular'
  }
});

const mapStateToProps = state => {
    return {
        reducer : state.Reducer
    }
};
export default connect(mapStateToProps)(DrawerComponent);
