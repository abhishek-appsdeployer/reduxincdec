import React, { useRef } from 'react';
import { View, TouchableOpacity, Image,Text, Animated } from 'react-native';

const Animationcomp = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const startRotateAnimation = () => {
    console.log("rotate")
    Animated.timing(rotateAnim, {
      toValue: 10,
      duration: 10000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        rotateAnim.setValue(0);
      }
    });
  };


  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <TouchableOpacity onPress={startRotateAnimation} style={{marginTop:20,textAlign:"center",flexDirection:"row",justifyContent:"center"}}>
        <Animated.Image
          source={{uri:"https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}}
          style={{ transform: [{ rotate: spin }], width: 200, height: 200 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={startRotateAnimation} style={{flexDirection:"row",justifyContent:"center",marginTop:50}}>
        <Text style={{textAlign:"center",width:200,backgroundColor:"pink",fontSize:25,borderRadius:20}}>Rotate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animationcomp;
