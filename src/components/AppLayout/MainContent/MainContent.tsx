import './MainContent.scss';

interface Props {
  children?: React.ReactNode;
  hasBackground?: boolean;
  title: string;
}

export default function MainContent(props: Props) {
  return (
    <div className={`main-content`}>
      <div className='main-content__title'>{props.title}</div>
      <div className={`main-content__container ${props.hasBackground && 'main-content__container--background'}`}>
        {props.children}
      </div>
    </div >
  );
}