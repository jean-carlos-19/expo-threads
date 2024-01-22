import { useOwnTheme } from '@/hooks/use-own-theme';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

export default function BottomIcos() {
 const iconSize = 20;
 const { theme } = useOwnTheme();
 return (
  <View className="flex-row space-x-2">
   <FontAwesome name="heart-o" size={iconSize} color={theme.icon.color} />
   <Ionicons
    name="chatbubble-outline"
    size={iconSize}
    color={theme.icon.color}
   />
   <AntDesign name="retweet" size={iconSize} color={theme.icon.color} />
   <Feather name="send" size={iconSize} color={theme.icon.color} />
  </View>
 );
}
