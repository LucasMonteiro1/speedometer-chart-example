import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import Speedometer from 'react-native-speedometer-chart';

export default class Main extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 50, justifyContent: 'center', alignItems: 'center' }}>
          <StatusBar hidden />

          <Text>25%</Text>
          <Speedometer value={25} totalValue={100} />
          
          <Text>50%</Text>
          <Speedometer value={50} totalValue={100} />

          <Text>75%</Text>
          <Speedometer value={75} totalValue={100} />

          <Text>100%</Text>
          <Speedometer value={100} totalValue={100} />

          <Text>Custom</Text>
          <Speedometer
            value={50}
            totalValue={150}
            size={250}
            outerColor="#d3d3d3"
            internalColor="#ff0000"
            showText
            text="50.00"
            textStyle={{ color: 'green' }}
            showLabels
            labelStyle={{ color: 'blue' }}
            showPercent
            percentStyle={{ color: 'red' }}
          />

          <Text>Needle</Text>
          <Speedometer value={0} totalValue={100} showIndicator />
          <Speedometer value={25} totalValue={100} showIndicator />
          <Speedometer value={50} totalValue={100} showIndicator />
          <Speedometer value={75} totalValue={100} showIndicator />
          <Speedometer value={100} totalValue={100} showIndicator />
        </View>
      </ScrollView>
    );
  }
}
