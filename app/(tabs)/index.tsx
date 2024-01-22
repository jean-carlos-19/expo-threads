import { View } from '@/components/Themed';
import Threads from '@/components/home/threads';
import { ThreadContext } from '@/context/thread-contentx';
import Lottie from 'lottie-react-native';
import React, { useContext, useRef } from 'react';
import { Platform, RefreshControl, ScrollView } from 'react-native';
export default function TabOneScreen() {
 const animationRef = useRef<Lottie>(null);

 const threads = useContext(ThreadContext);

 return (
  <View className="flex-1">
   <ScrollView
    contentContainerStyle={{
     paddingTop: Platform.select({ android: 30, ios: 30 }),
    }}
    refreshControl={
     <RefreshControl
      refreshing={false}
      tintColor={'transparent'}
      onRefresh={() => {
       animationRef.current?.play();
      }}
     />
    }
   >
    <Lottie
     ref={animationRef}
     loop={false}
     autoPlay={true}
     source={require('../../lottie-animations/Animation - 1705791165948.json')}
     style={{ width: 90, height: 90, alignSelf: 'center' }}
    />
    <Threads threads={threads} />
   </ScrollView>
  </View>
 );
}
