import React from 'react';
import { View, Text } from 'react-native';

import logoImg from '../ ../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    return(
        <View style = {styles.container}>
            <View style = {styles.header}> 
            </View>
            <Text style = {styles.title}>Efetue seu login</Text>
        </View>
    );

}