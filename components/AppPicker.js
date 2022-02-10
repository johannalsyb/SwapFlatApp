import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import MText from './MText';



function AppPicker({icon, placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
        <MText> {placeholder}</MText>
          { icon &&  <MaterialCommunityIcons name={icon} size={20} color={colors} style={styles.icon}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        width: "100%",
        backgroundColor: colors.back,
        padding: 15,
        marginVertical: 10, 
        borderRadius: 20,
    }, 
    icon:{
        marginRight: 10,
    }
})

export default AppPicker;