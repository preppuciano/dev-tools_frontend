import Button from '../../Button';
import AddCircleIcon from '../../../assets/icons/add_circle.svg?react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__content'>
        <Link to='/' className='header__content__logo'>
          DevTools
        </Link>
        <div className='header__content__navbar'>
          <Link to={'/add-tool'}>
            <Button icon={AddCircleIcon}>Add Tool</Button>
          </Link>
          <Link to={'/add-category'}>
            <Button icon={AddCircleIcon}>Add Category</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}