import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomTabs from './BottomTabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigatorCustom = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <ContentMenu {...props} />}
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
        >
            {/* <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} /> */}
            <Drawer.Screen name="Tabs" options={{ title: 'Home' }} component={BottomTabs} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const ContentMenu = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.drawerContent}>
                <Image
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                
                <TouchableOpacity 
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Icon name={"map-outline"} size={25} color={"black"} />
                    <Text style={styles.menuItemText}> Principal</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        ...styles.menuButton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name={"settings-outline"} size={25} color={"black"} />
                    <Text style={styles.menuItemText}> Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

export default DrawerNavigatorCustom;