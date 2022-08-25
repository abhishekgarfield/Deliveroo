import { Text ,View ,StyleSheet, SafeAreaView} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const Homescreen=()=>{
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions(
            {headerShown:false}
        );
    },[])
    return(
        <SafeAreaView>   
        <View>
            <Text style={styles.myState}>Homescreen</Text>
        </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create ({
    myState: {
        marginTop:20,
       color: 'red',
       fontWeight: 'bold',
       fontSize: 20
    }
  })

export default Homescreen;