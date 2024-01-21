interface Thread {
 id: string;
 author: User;
 content: string;
 image?: string;
 replies?: Reply[];
 repliesCount: number;
 likescount: number;
 metions?: boolean;
 mentionUser: User;
 createdAt: string;
}
