import React from 'react';
import {
  ScrollView,
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

    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.searchViewContainer}>
      {loading ? (
        <ActivityIndicator style={{marginTop: 24}} />
      ) : (
        <View>
          {destinationList.map((item, index) => (
            <View key={index} style={styles.destinationCard}>
              <TouchableOpacity
                onPress={() =>
                  autoComplete(`${item.name}, ${item.address.cityCode}`)
                }>
                <Text
                  style={
                    styles.text
                  }>{`${item.name}, ${item.address.cityCode}`}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  </View>
);
