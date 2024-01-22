import BottomIcos from '@/components/home/bottom-icons';
import PostFooter from '@/components/home/post-footer';
import PostHeader from '@/components/home/post-header';
import { useOwnTheme } from '@/hooks/use-own-theme';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import PostLeftSide from './post-left-side';

export default function ThreadItem({ thread }: { thread: Thread }) {
 const { theme } = useOwnTheme();
 const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

 return (
  <View className="space-y-2">
   <View className="flex-row space-x-2">
    <View>
     <PostLeftSide {...thread} />
    </View>
    <View>
     <Text className={`${theme.text.color}`}>{thread.author.username}</Text>
     <View className="space-y-2">
      {/*  <PostLeftSide {...thread} /> */}
      <PostHeader
       name={thread.author.name}
       createdAt={thread.createdAt}
       verified={thread.author.verified}
      />
      <Text className={`${theme.text.color}`}>{thread.content}</Text>
     </View>
    </View>
   </View>
   <View>
    <BottomIcos />
    {thread.image && (
     <Image
      source={{ uri: thread.image }}
      className="w-full min-h-[300] rounded-md"
      placeholder={blurhash}
      contentFit="cover"
      transition={1000}
     />
    )}
   </View>
   <View>
    <PostFooter replies={thread.repliesCount} likes={thread.likescount} />
   </View>
  </View>
 );
}
