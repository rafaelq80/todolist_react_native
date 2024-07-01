import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    datePickerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 8,
        marginBottom: 8,
    },
    selectInput: {
        width: "91.666667%",
        backgroundColor: '#ede9fe',
        color: '#000000',
        borderColor: 'transparent',
        borderRadius: 24,
        borderWidth: 1,
        fontSize: 20,
        lineHeight: 28,
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 8,
        paddingBottom: 8,
    },
    placeholder: {
        color: '#000000',
        fontSize: 20,
        lineHeight: 28,
        paddingStart: 16,
    },
    container: {
        color: '#000000',
        backgroundColor: '#ede9fe',
        fontSize: 20,
        lineHeight: 28,
    }
});