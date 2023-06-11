import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { create, all } from 'mathjs';

const math = create(all);

const Calculadora = () => {
    const [resultado, setResultado] = useState('');

    const handleButtonPress = (value) => {
        setResultado(resultado + value);
    }
}

export default Calculadora;