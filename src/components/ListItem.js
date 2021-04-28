import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from './';
import { capitalize, computeStock } from '../helpers';
import { useWeather } from '../hooks/useWeather';

import beerIcon from '../assets/beer.png';
import guestsIcon from '../assets/guests.png';
import weatherIcon from '../assets/weather.png';

const ListItem = ({ item, expanded, handlePress }) => {
  const { data, loading, error } = useWeather();

  return (
    <View style={{ marginVertical: 10 }}>
      <Card expanded={expanded}>
        <TouchableOpacity onPress={handlePress} style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View>
              <Text style={styles.words}>{capitalize(item.name)}</Text>
              <Text style={style.dateSkeleton}>DD/MM/YYYY</Text>
            </View>
            <Text style={styles.words}>...</Text>
          </View>

          {expanded && (
            <View style={styles.body}>
              <Text style={styles.subtitle}>Detalle del evento:</Text>
              <View style={styles.itemContainer}>
                <View>
                  <Image source={beerIcon} style={styles.icon} />
                  <Text style={{ textAlign: 'center' }}>{computeStock(data.temp, item.guestsQuantity)}</Text>
                </View>
                <View>
                  <Image source={guestsIcon} style={styles.icon} />
                  <Text style={{ textAlign: 'center' }}>{item.guestsQuantity}</Text>
                </View>
                <View>
                  <Image source={weatherIcon} style={styles.icon} />
                  <Text style={{ textAlign: 'center' }}>{Math.ceil(data.temp)}°</Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  body: {
    marginVertical: 20,
  },
  words: { 
    color: 'gray', 
    fontWeight: 'bold', 
    fontSize: 15 
  },
  subtitle: { 
    color: 'gray', 
    fontWeight: '100', 
    fontSize: 15 
  },
  itemContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 10 
  },
  icon: { 
    width: 40, 
    height: 40 
  },
  dateSkeleton: {
    color: 'gray', 
    fontWeight: 'bold', 
    fontSize: 12, 
    marginTop: 10
  }
});

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
