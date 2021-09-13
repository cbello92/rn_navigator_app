import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {};

const PageTwoScreen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Atrás'
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page Two Screen</Text>

            <Button 
                title="Ir a página 3"
                onPress={() => navigation.navigate('PageThreeScreen')}
            />
        </View>
    )
}

export default PageTwoScreen;
