import ThreadItem from '@/components/home/thread-item';
import React from 'react';
import { View } from 'react-native';

interface ThreadProps extends React.ComponentProps<typeof View> {
 threads: ThreadContextType;
}

export default function Threads({ threads, style, className }: ThreadProps) {
 return (
  <View className={`${className}`} style={[style]}>
   {threads.threads.map((thread, index) => (
    <View key={index}>
     <ThreadItem thread={thread} key={thread.id} />
    </View>
   ))}
  </View>
 );
}
