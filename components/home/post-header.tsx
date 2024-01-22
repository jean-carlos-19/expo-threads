import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function PostHeader({
 name,
 verified,
 createdAt,
}: {
 name: string;
 createdAt: string;
 verified: boolean;
}) {
 return (
  <View>
   <Text className="text-slate-100">{name}</Text>
   {verified && <MaterialIcons name="verified" size={14} color="#60a5fa" />}
  </View>
 );
}
