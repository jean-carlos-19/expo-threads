import { useColorScheme } from 'react-native';

export const useOwnTheme = () => {
 const currentTheme = useColorScheme();
 const textColor =
  currentTheme === 'dark' ? 'text-slate-100' : 'text-slate-900';
 const iconColor = currentTheme === 'dark' ? 'white' : 'black';
 const boderColor =
  currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200';
 return Object.freeze({
  theme: {
   text: {
    color: textColor,
   },
   border: {
    color: boderColor,
   },
   icon: {
    color: iconColor,
   },
  },
 });
};
