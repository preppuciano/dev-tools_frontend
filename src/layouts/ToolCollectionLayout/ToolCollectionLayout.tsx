import './ToolCollectionLayout.scss';

interface Props {
  children: React.ReactNode;
}

export default function ToolCollectionLayout(props: Props) {
  return (
    <div className='tool-collection-layout'>
      {props.children}
    </div>
  );
}