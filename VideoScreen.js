import React from "react";
import Video from 'react-native-video';
import { View } from "react-native";

const VideoScreen = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <Video 
      source={{
        uri: 'http://streaming03.zas.media:1935/adindaiatuba/adindaiatuba/playlist.m3u8',
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

export default VideoScreen;