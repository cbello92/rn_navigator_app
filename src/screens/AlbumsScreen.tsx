import React, { useContext } from 'react'
import { View, Button } from 'react-native';
import { Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {

    const { authState, logout } = useContext(AuthContext);

    return (
        <View>
            <Text>Album Screen</Text>

            {
                authState.isLoggedIn &&
                (<Button 
                    title="Log Out"
                    onPress={logout}
                />)
            }

        </View>
    )
}

export default AlbumsScreen
