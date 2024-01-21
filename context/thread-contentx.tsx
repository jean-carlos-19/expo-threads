import { generateThreads } from '@/utils/generate-dommy-data';
import { createContext, useEffect, useState } from 'react';
export const ThreadContext = createContext<ThreadContextType>({
 threads: [],
 setThreads: () => {},
});

export const ThreadProvider = ({ children }: { children: React.ReactNode }) => {
 const [threads, setThreads] = useState<Thread[]>([]);
 useEffect(() => {
  setThreads(generateThreads());
 }, []);
 return (
  <ThreadContext.Provider value={{ threads, setThreads }}>
   {children}
  </ThreadContext.Provider>
 );
};
