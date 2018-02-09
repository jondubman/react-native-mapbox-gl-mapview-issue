/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Dimensions from 'Dimensions';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

const accessToken = 'pk.eyJ1IjoiamR1Ym1hbiIsImEiOiJjaXl5c3YyOXcwMWt2MndwbHIyM2FoaXNjIn0.O_FecplE25-DLTm_NEqS4A';
const styleURL = 'mapbox://styles/mapbox/satellite-streets-v9';

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      center: [
         -87.619392,
        41.882702,
      ],
    }
    MapboxGL.setAccessToken(accessToken);
  }

  windowSize() {
    const dim = Dimensions.get('window');
    console.log('findme: windowSize', dim);
    return dim;
  }

  componentDidMount() {
    console.log('findme: componentDidMount');
    const bounds = this._map.getVisibleBounds().then(bounds => {
      console.log('findme: bounds', bounds[0][1], bounds[0][0], bounds[1][1], bounds[1][0]);
    })
  }

  render() {
    const height = this.windowSize().height - 100;
    const width = this.windowSize().width - 50;
    const style = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        height,
        width,
      },
    })
    return (
      <View style={style.container}>
        <MapboxGL.MapView
          ref={map => { this._map = map; }}
          style={style.map}
          styleURL={styleURL}
          centerCoordinate={this.state.center}
          contentInset={[0, 0, 0, 0]}
          zoomLevel={17}
          zoomEnabled={true}
          heading={0}
          logoEnabled={false}
          compassEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          scrollEnabled={true}
          showUserLocation={false}
        />
      </View>
    )
  }
}
