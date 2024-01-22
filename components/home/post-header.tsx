import { useOwnTheme } from '@/hooks/use-own-theme';
import { timeAgo } from '@/utils/time-ago';
import { Feather, MaterialIcons } from '@expo/vector-icons';
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
 const { theme } = useOwnTheme();
 return (
  <View className="flex-row justify-between">
   <View className="flex-row space-x-2">
    <Text className={`${theme.text.color} font-semibold`}>{name}</Text>
    {verified && <MaterialIcons name="verified" size={14} color="#60a5fa" />}
   </View>
   <View className="flex-row space-x-2">
    <Text className={`${theme.text.color}`}> {timeAgo(createdAt)} </Text>
    <Feather name="more-horizontal" size={14} color={'gray'} />
   </View>
  </View>
 );
}
