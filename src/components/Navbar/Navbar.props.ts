import {ReactNode} from 'react';
export interface INavbarProps {
  title: string | ReactNode;
  onBack?: (...args) => any;
}
