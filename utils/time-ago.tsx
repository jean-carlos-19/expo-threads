export function timeAgo(date: string): string {
 const now: Date = new Date();
 const diffInMs: number = now.getTime() - new Date(date).getTime();
 const diffInSeconds: number = Math.floor(diffInMs / 1000);
 const diffInMinutes: number = Math.floor(diffInSeconds / 60);
 const diffInHours: number = Math.floor(diffInMinutes / 60);
 const diffInDay: number = Math.floor(diffInHours / 24);
 if (diffInSeconds < 60) {
  return `${diffInSeconds} seconds ago`;
 }
 if (diffInMinutes < 60) {
  return `${diffInMinutes} minutes ago`;
 }
 if (diffInHours < 24) {
  return `${diffInHours} hours ago`;
 }
 if (diffInDay < 7) {
  return `${diffInDay} days ago`;
 }
 return diffInDay + ' days ago';
}
