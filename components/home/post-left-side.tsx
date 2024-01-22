import { Image } from 'expo-image';
import React from 'react';
import { View } from 'react-native';

export default function PostLeftSide(thread: Thread) {
 const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
 return (
  <View className="flex-col items-center">
   <Image
    source={thread.author.photo}
    style={{ width: '100%', minHeight: 35, borderRadius: 35 }}
    placeholder={blurhash}
    contentFit="cover"
    transition={500}
   />
   <View>
    <View className="flex-col items-center space-y-2">
     {[1, 2, 3].map((index) => (
      <Image
       key={index}
       source={thread.replies?.[index - 1]?.author.photo}
       style={{ width: index * 7, height: index * 7, borderRadius: 15 }}
       placeholder={blurhash}
       contentFit="cover"
       transition={50}
      />
     ))}
    </View>
   </View>
  </View>
 );
}
