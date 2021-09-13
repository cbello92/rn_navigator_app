import { StyleSheet } from "react-native";

export const colors = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10   
    },
    buttonPerson: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    buttonPersonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    drawerContent: {
        alignItems: 'center',
        marginTop: 10
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50
    },
    menuItemText: {
        fontSize: 20
    },
    menuButton: {
        marginVertical: 10
    }
})