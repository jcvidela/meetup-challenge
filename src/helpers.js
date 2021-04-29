import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transition } from 'react-native-reanimated';
import _ from 'lodash';

/**
 *
 * @param {number} amountOfBeer Number of beers per person
 * @param {number} amountOfPeople Number of people at the meetup
 * @returns Number of beer packs needed
 */
export function computeBeer(amountOfBeer, amountOfPeople) {
  const quantityBeersPerPack = 6;
  let totalPacks = (amountOfPeople * amountOfBeer) / quantityBeersPerPack;
  let rounded = Math.ceil(totalPacks); // round up
  return rounded;
}

/**
 * @param {number} currentWeather
 * @param {number} currentWeather
 * @returns {any}
 */
export function computeStock(currentWeather, amountOfPeople) {
  const amount = {
    btw20and24Degrees: 1,
    lessThan20Degrees: 0.75,
    moreThan24Degrees: 2,
  };

  switch (true) {
    case currentWeather >= 20 && currentWeather <= 24:
      return computeBeer(amount.btw20and24Degrees, amountOfPeople);

    case currentWeather < 20:
      return computeBeer(amount.lessThan20Degrees, amountOfPeople);

    case currentWeather > 24:
      return computeBeer(amount.moreThan24Degrees, amountOfPeople);

    default:
      return currentWeather;
  }
}

/**
 * @param {string} word
 * @returns word with first letter capitalized
 */
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * @param {*} candidate
 * @param {number} length
 * @returns boolean
 */
export function validateFields(candidate, length) {
  return _.values(candidate).filter((el) => el).length < length;
}

/**
 * @param {*} item
 * @returns Promise
 */
export async function getFromStorage(item) {
  try {
    let retrieved = await AsyncStorage.getItem(item);
    return retrieved;
  } catch (error) {
    return {
      error: true,
      message: error,
    };
  }
}

/**
 * @param {string} key
 * @param {object} data
 * @returns Promise
 */
export async function saveOnStorage(key, data) {
  try {
    let saved = await AsyncStorage.setItem(key, data);
    return saved;
  } catch (error) {
    return {
      error: true,
      message: error,
    };
  }
}

/**
 * @param {*} key
 * @returns Promise
 */
export async function removeFromStorage(key) {
  try {
    AsyncStorage.removeItem(key);
    return {
      removed: true,
      message: 'User secrets has been removed',
    };
  } catch (error) {
    return {
      error: true,
      message: error,
    };
  }
}

/**
 * List Items transition
 */
export const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);