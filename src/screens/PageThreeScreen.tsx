import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> { };
const PageThreeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page Three Screen</Text>

            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />

            <Button
                title="Ir al Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default PageThreeScreen;