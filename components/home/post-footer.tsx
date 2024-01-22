import { useOwnTheme } from '@/hooks/use-own-theme';
import React from 'react';
import { Text } from 'react-native';

export default function PostFooter({
 replies,
 likes,
}: {
 replies: number;
 likes: number;
}) {
 const { theme } = useOwnTheme();
 return (
  <Text className={`${theme.text.color}`}>
   {replies} replies - {likes} likes
  </Text>
 );
}
