import './Button.scss';

interface Props {
  icon?: React.ElementType;
  type?: 'submit'
  children?: React.ReactNode;
  variant?: 'white' | 'success' | 'danger';
}

export default function Button({ children, variant = 'white', icon: Icon, type }: Props) {
  return (
    <button type={type} className={`button button--${variant}`}>
      {
        Icon && <Icon className={`button__icon button__icon--${variant}`} />
      }
      {children}
    </button>
  );
}