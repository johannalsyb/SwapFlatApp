import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import style from '../config/style';
import MText from './MText';



function AppPicker({icon, placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
          { icon &&  <MaterialCommunityIcons name={icon} size={20} color={colors.secondary} style={styles.icon}/>}
            <MText> {placeholder}</MText>
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