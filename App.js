import * as React from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';

import Counter from './app/components/Counter'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      min: 1,
      second: 0,
      isBreak: false,
      isStarted: false,
    }
  }

  clock = () => {
    if (this.state.second === 0 && this.state.min === 0 && !this.state.isBreak)
      this.setState({ min: 2, isBreak: true })
    if (this.state.second === 0 && this.state.min === 0 && this.state.isBreak)
      this.setState({ min: 1, isBreak: false })
    if (this.state.second === 0) {
      this.setState(prevState => ({
        min: prevState.min - 1,
        second: 59,
      }))
    } else {
      this.setState(prevState => ({
        second: prevState.second - 1,
      }))
    }
  }

  start = () => {
    this.interval = setInterval(this.clock, 1000)
  }

  header = () => {
    if (!this.state.isStarted)
      return "Pomodoro Timer"
    else if (this.state.isBreak)
      return "Take a break!"
    else if (!this.state.isBreak)
      return "Let's work!"
  }

  buttonTitle = () => {
    if (this.state.isStarted) {
      return "Pause"
    } else {
      return "Start"
    }
  }

  buttonPress = () => {
    if (this.state.isStarted) {
      clearInterval(this.interval)
    } else {
      this.start()
    }
    this.setState(prevState => ({
      isStarted: !prevState.isStarted
    }))
  }

  reset = () => {
    this.setState(prevState => ({
      isStarted: false,
      isBreak: false,
      min: 25,
      second: 0.
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>{this.header()}</Text>
        </View>
        <View style={styles.counterContainer}>
          <Counter min={this.state.min} second={this.state.second} />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <Button title={this.buttonTitle()} onPress={this.buttonPress}></Button>
            <Button title="Reset" onPress={this.reset}></Button>
          </View>
        </View>
      </View>
    )
  }
}

const vibrate = () => Vibration.vibrate([500, 500, 500])

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})