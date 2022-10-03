import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const flatListData = require('./flatListData')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:0.1, backgroundColor:'#1BA9FF', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around',}}>
        <Image source={require("./images/back.png")} 
          style={{height: 24, width:24, alignItems:'flex-start', marginRight:150}}/>
        <Text style={{alignContent:'center', color:'white', fontSize:15, fontWeight:'500'}}>Chat</Text>
        <Image source={require("./images/giohang.png")} 
        style={{height: 24, width:24, alignContent:'flex-end', marginLeft:150}}/>
      </View>
      <View style={{flex:0.1, backgroundColor:'#E5E5E5', flexDirection:'row', alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontSize:15, fontWeight:'400'}}>Bạn có thắc mắc với sản phẩm vừa xem? Đừng ngại {"\n"} chat với shop!</Text>
      </View>
      <View style={{flex:0.76}}>
        <FlatList data={flatListData}
          renderItem={
            ({item,index}) =>{
              return(
                <View style={styles.viewItem}>
                  <View style={{flex:0.3,alignItems:'center'}}>
                    <Image source={{uri: item.photo} } style={styles.imageleft}/>
                  </View>
                  <View style={{flex:0.4,marginTop:10}}>
                    <Text>{item.itemName}</Text>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{padding:1,marginTop:4, fontSize:15}} >Shop</Text>
                      <Text style={{color:'red', fontSize:15, marginTop:5}}>  {item.shopName}</Text>
                    </View>
                  </View>
                  <View style={{flex:0.3,justifyContent: "center",alignItems: "center",}}>
                    <TouchableOpacity style={{backgroundColor: 'red', height:38, width: 88, marginTop:5}}>
                      <Text style={{color:'white', fontSize:18, fontWeight:'500',marginLeft:20,marginTop:6}}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
          }>
        </FlatList>
      </View>
      <View style={{flex:0.09, backgroundColor:'#1BA9FF', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around',}}>
        <Image source={require("./images/list.png")} 
          style={{height: 24, width:24, alignItems:'flex-start', marginRight:0}}/>
        <Image source={require("./images/home.png")} style={{alignContent:'center', color:'white', fontSize:15, fontWeight:'500'}}/>
        <Image source={require("./images/backphone.png")} 
        style={{height: 24, width:24, alignContent:'flex-end', marginLeft:0}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  imageleft:{
    width:80,
    height:80
  },
  viewItem:{
    flex:1,
    padding:5,
    flexDirection: 'row',
    alignContent:'center',
    justifyContent: 'space-around',
    borderColor: "#C4C4C4",
    borderTopWidth:1
  },

});
