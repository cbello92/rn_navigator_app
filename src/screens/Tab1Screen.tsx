import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import IconButton from '../components/IconButton';

const Tab1Screen = () => {

    useEffect(() => {
        console.log("Tab1Screen effect");
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <IconButton name="airplane-outline"  />
                <IconButton name="albums-outline"  />
                <IconButton name="alarm-outline"  />
                <IconButton name="at-outline"  />
                <IconButton name="battery-full-outline"  />
                <IconButton name="cart-outline"  />
                <IconButton name="football-outline"  />
            </Text>
        </View>
    )
}

export default Tab1Screen;