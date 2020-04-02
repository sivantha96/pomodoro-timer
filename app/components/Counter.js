import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

export default class Counter extends React.Component {
    digitizer = (digit) => {
        if(digit < 10)
            return "0" + digit
        else
            return digit
    }

    render() {
        return (
            <View style={styles.counterContainer}>
                <View style={[styles.numberBox, styles.alignRight]}>
                    <Text style={styles.counter}>{this.digitizer(this.props.min)}</Text>
                </View>
                <View style={styles.colonContainer}>
                    <Text style={styles.counter}>:</Text>
                </View>
                <View style={[styles.numberBox, styles.alignLeft]}>
                    <Text style={styles.counter}>{this.digitizer(this.props.second)}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberBox: {
        flex: 4,
        justifyContent: 'center',
    },
    alignRight: {
        alignItems: 'flex-end'
    },
    alignLeft: {
        alignItems: 'flex-start'
    },
    colonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 100,
    }
})