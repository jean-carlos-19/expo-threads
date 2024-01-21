import { Text, View } from 'react-native';
import PostHeader from './post-header';

export default function ThreadItem({ thread }: { thread: Thread }) {
    return (
        <View>
            <Text className='text-slate-100'>{thread.author.username}</Text>
            <View>
                <PostHeader
                    name={thread.author.name}
                    createdAt={thread.createdAt}
                    verified={thread.author.verified}
                />
            </View>
        </View>
    );
}
