import {ReactNode} from 'react';

export interface INavbarProps {
  title: string | ReactNode;
  onBack?: any;
  rightTitle?: string;
  rightAction?: (...args) => void;
  rightIcon?: string;
}
