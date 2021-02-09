import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#81248A',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginLogo: {
        width: 287,

        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },

    inputs: {
        backgroundColor: '#FFF',
        width: 320,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 24,
        marginBottom: 20,
    },

    buttonLogin: {
        justifyContent: 'center',
        alignItems: 'center',

        height: 35,
        width: 320,

        backgroundColor: '#FD8C00',
        borderRadius: 20,
    },

    TextButtonLogin: {
        fontSize: 16,
        color: '#FFF',
    },

    btnForgotPassword: {
        width: 150,
        alignItems: 'center',
        marginLeft: '60%',
        marginTop: 20,
    },

    forgotPassword: {
        color: '#FD8C00',
        fontSize: 14
    },

    otherAccounts: {
        color: '#FFF',
        marginTop: 15,
        marginBottom: 10,
        fontSize: 12
    },

    Accounts: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
    },

    btnOthersLogin: {
        justifyContent: 'center',
        alignItems: 'center',

        height: 40,
        width: 40,

        backgroundColor: '#E6E6E6',
        borderRadius: 30,
        marginBottom: 20,
    },

    RegisterNow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        height: 14,
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },

    Terms: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 250,
        height: 14,
    },
});

export default styles;
