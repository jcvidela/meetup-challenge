import { capitalize } from 'lodash';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../api';

const WeatherInfo = () => {
  const [state, setState] = React.useState({
    data: null,
    loading: true,
    error: null,
  });

  const { data, loading, error } = state;

  React.useEffect(() => {
    api
      .getWeather()
      .then((data) =>
        setState({
          data,
          loading: false,
          error: null,
        }),
      )
      .catch(() =>
        setState({
          data: null,
          loadng: false,
          error: 'Error getting weather',
        }),
      );
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hubo un error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.weather}>{Math.round(data.temp)}°</Text>
      </View>

      <View style={styles.location}>
        <Text style={styles.locationCityText}>{data.location}</Text>
        <Text style={styles.weatherText}>{capitalize(data.desc)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weather: {
    fontSize: 50,
    textAlign: 'left',
  },
  location: {
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
  },
  locationCityText: {
    fontWeight: 'bold',
    color: 'grey',
  },
  weatherText: {
    color: 'grey',
  },
});

export default WeatherInfo;
