import './Menu.scss';

interface MenuProps {
  children?: React.ReactNode;
}

function Menu(props: MenuProps) {
  return (
    <div className='menu'>{props.children}</div>
  );
}

interface MenuHeadProps {
  children?: React.ReactNode;
}

function MenuHead(props: MenuHeadProps) {
  return (
    <div className='menu-head'>{props.children}</div>
  );
}

interface MenuBodyProps {
  children?: React.ReactNode;
}

function MenuBody(props: MenuBodyProps) {
  return (
    <div className='menu-body'>{props.children}</div>
  );
}


export default Object.assign(Menu, { Head: MenuHead, Body: MenuBody });