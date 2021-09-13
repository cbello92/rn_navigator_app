import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

const PersonScreen = ({ navigation, route }: Props) => {
    
    const { changeUsername } = useContext(AuthContext);
    const params = route.params;

    useEffect(() => {
        changeUsername(params.name);
    }, [])

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])
    
    return (
        <View>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }

            </Text>
        </View>
    )
}

export default PersonScreen
