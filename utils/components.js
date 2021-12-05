import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from './styles';

export const DestinationField = ({
  onChange,
  value,
  loading,
  autoComplete,
  destinationList,
}) => (
  <View>
    <Text style={[styles.bold]}>Destination (Airport / City)</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder="Search for Airports and Cities"
    />
    <Text style={styles.small}>
      keyword that should represent the start of a word in a city or airport
      name or code
    </Text>

    <View
      contentInsetAdjustmentBehavior="automatic"
      style={styles.searchViewContainer}>
      {loading ? (
        <ActivityIndicator style={{marginTop: 24}} />
      ) : (
        <View>
          {destinationList.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => autoComplete(item.name, item.address.cityCode)}>
              <View style={styles.destinationCard}>
                <Text
                  style={
                    styles.text
                  }>{`${item.name}, ${item.address.cityCode}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  </View>
);
