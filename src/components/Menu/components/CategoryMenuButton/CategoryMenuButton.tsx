import './CategoryMenuButton.scss';
import { Link } from 'react-router-dom';
import { CategoryModel } from '../../../../models/CategoryModel';

interface Props {
  category: CategoryModel
}

export default function CategoryMenuButton(props: Props) {
  return (
    <Link to={`/category/${props.category.value}`} className='menu-button'>
      <IconCategoryMenu icon={props.category.iconUrl} />
      <span className='menu-button__text'>{props.category.displayName}</span>
    </Link>
  );
}


interface IconCategoryMenuProps {
  icon: string;
}

function IconCategoryMenu(props: IconCategoryMenuProps) {
  return (
    <img src={props.icon} className='menu-button__icon' />
  );
}