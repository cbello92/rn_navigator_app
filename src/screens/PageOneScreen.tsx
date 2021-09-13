import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

const PageOneScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page One Screen</Text>

            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('PageTwoScreen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5
            }}>Navegar con argumentos</Text>

            <View style={{
                flexDirection: 'row'
            }}>
                <TouchableOpacity
                    style={{
                        ...styles.buttonPerson,
                        backgroundColor: 'blue'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <Icon name={"man-outline"} size={40} color={"white"} />
                    <Text style={styles.buttonPersonText}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonPerson}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'María'
                    })}
                >
                    <Icon name={"woman-outline"} size={40} color={"white"} />
                    <Text style={styles.buttonPersonText}>María</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default PageOneScreen;
