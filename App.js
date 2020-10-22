import React from "react";
import { View } from "react-native";
import Video from 'react-native-video';

const App = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <Video 
      source={{
        uri: 'http://streaming05.zas.media:8053/live',
        type: 'm3u8' 
      }}
      controls
      resizeMode="contain"
      style={{
        flex: 1,
      }}
      progressUpdateInterval={5000}
      />
  </View>
);

export default App;