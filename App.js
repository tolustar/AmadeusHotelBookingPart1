import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {styles} from './utils/styles';
import {fetchDestination} from './utils/apis';
import {DestinationField} from './utils/components';

const App = () => {
  const [searchItem, setSearchItem] = useState('');
  const [destinationList, setdestinationList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [typingId, setTypingId] = useState(null);

  const autoCompleteDestinationField = text => {
    setSearchItem(text);
    setdestinationList([]);
  };

  const searchDestination = text => {
    setSearchItem(text);

    const destinationData = async () => {
      try {
        setLoading(true);
        const result = await fetchDestination(searchItem);
        setLoading(false);
        setdestinationList(result);
      } catch (error) {
        setdestinationList([]);

        console.log('error', error.response.data);
        setLoading(false);
      }
    };

    clearTimeout(typingId);
    const timeoutId = setTimeout(destinationData, 1000);
    setTypingId(timeoutId);
  };

  return (
    <SafeAreaView>
      <View style={[styles.screenContainer]}>
        <StatusBar barStyle={'dark-content'} />

        <View style={styles.backgroundContainer}>
          <Text style={[styles.header]}>Amadeus Hotel Booking</Text>

          <Text style={[styles.bold]}>Destination (Airport / City)</Text>

          <DestinationField
            onChange={searchDestination}
            value={searchItem}
            autoComplete={autoCompleteDestinationField}
            destinationList={destinationList}
            loading={loading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
