export interface IButtonProps {
  onPress: (...args) => any;
  children?: string;
  loading?: boolean;
  title?: string;
  disabled?: boolean;
  loadingTitle?: string;
}
