import { FlatList,StyleSheet, Text, View, Image, } from 'react-native';
import {Rating} from 'react-native-ratings'

const flatListColData = require("./flatListColData")

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:0.1, backgroundColor:'#1BA9FF', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around',}}>
        <Image source={require("./images/back.png")} 
          style={{height: 24, width:24, alignItems:'flex-start', marginRight:10}}/>
        <View style={{flex:0.5, backgroundColor:'white', flexDirection:'row', padding:5}}>
          <Image source={require('./images/search.png')}/>
          <Text style={{ color: "#7D5B5B", paddingLeft: 10, paddingTop: 3 }}>Dây cáp USB</Text>
        </View>
        <Image source={require("./images/giohang.png")} 
        style={{height: 24, width:24, alignContent:'flex-end', marginLeft:10}}/>
        <Image source={require('./images/Group_2.png')}/>
      </View>
        
      <View style={{flex:0.86,justifyContent:'center',alignItems:'center' }}>
        <FlatList data={flatListColData} 
          key={'#'}
          numColumns={2}
          renderItem={
          ({item, index}) =>{
            return(
              <View style={styles.viewItem}>
                      <Image source={{ uri: item.photo }} style={styles.imageleft}></Image>
                      <Text>Cáp chuyển từ cổng từ {"\n"}USB sang PS2...</Text>
                      <View style={{flex:1,marginTop:10, flexDirection: 'row'}}>
                        <Rating imageSize={15} ratingCount={5} startingValue={4}  />
                        <Text>(15)</Text>
                      </View>
                      <View style={{flex:1,flexDirection:'row',justifyContent: "center",alignItems: "center",}}>
                        <Text style={{fontWeight:'bold'}}>69.900 đ</Text>
                        <Text style={{color:'#969DAA',paddingLeft:10}}>-39%</Text>
                      </View>
              </View>
            )}}>
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
    marginTop:20
  },
  imageleft:{
    width:140,
    height:80,
    flex:0.45,
    resizeMode:'contain'
  },
  viewItem:{
padding:5
  },
});
