import React from "react";
import Video from 'react-native-video';
import { View } from "react-native";

const AudioScreen = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <Video 
      source={{
        uri: 'http://streaming05.zas.media:8053/live.m3u',
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

export default AudioScreen;