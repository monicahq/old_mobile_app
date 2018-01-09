import { StyleSheet, PixelRatio } from 'react-native';

export const textColor = '#8d8d8d';
export const activeTextColor = '#1361cb';
export const iconSize = 25;

export const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 48,
        backgroundColor: '#F8F7F7',
        borderColor: '#979797',
        borderTopWidth: 1 / PixelRatio.get(),
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
    },
    text: {
        fontSize: 10,
        color: textColor
    },
    textActive: {
        color: activeTextColor,
    }
});
