import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

    const insets = useSafeAreaInsets();
    const { authState } = useContext(AuthContext);


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top
        }}>
            <Text style={styles.title}>Settings User</Text>
            <Text>
                {
                    JSON.stringify(authState, null, 4)
                }
            </Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color={colors.primary}
                    />
                )
            }
        </View>
    )
}

export default SettingsScreen
