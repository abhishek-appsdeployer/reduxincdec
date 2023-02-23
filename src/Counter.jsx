import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
 
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,increment5,decrement5 } from '../redux/action/countAction';
const windowHeight = Dimensions.get('window').height;
export default function Counter() {
   
  const dispatch = useDispatch();
 
  const count = useSelector((store) => store.count.count);
 
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrement5 = () => {
    dispatch(increment5());
  };
 
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleDecrement5 = () => {
    dispatch(decrement5());
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter App</Text>
      <Text style={styles.counter_text}>{count}</Text>
 
      <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
        <Text style={styles.btn_text}> Increment </Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        onPress={handleDecrement}
        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
        <Text style={styles.btn_text}> Decrement </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleIncrement5}
        style={{ ...styles.btn, backgroundColor: 'blue' }}>
        <Text style={styles.btn_text}> Increment +5 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDecrement5}
        style={{ ...styles.btn, backgroundColor: 'red' }}>
        <Text style={styles.btn_text}> Decrement -5 </Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    
    
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
    backgroundColor:"pink",
    height:windowHeight
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
    
    backgroundColor:"red",
    borderRadius:20,
    width:100,
    padding:10,
    textAlign:"center"
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width:170
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
    textAlign:"center"
  },
});