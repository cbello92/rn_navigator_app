import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string;
    size?: number;
}

const IconButton = ({ name, size = 80 }: Props) => {

    const { favoriteIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => favoriteIcon(name)}
        >
            <Icon name={name} size={size} color={colors.primary} />
        </TouchableOpacity>
    )
}

export default IconButton;