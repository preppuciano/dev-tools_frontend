import './ToolCard.scss';
import FavoriteIcon from '../../assets/icons/favorite.svg?react';
import { ToolModel } from '../../models/ToolModel';
import { CategoryModel } from '../../models/CategoryModel';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  tool: ToolModel;
}

export default function ToolCard(props: Props) {
  function getCategoriesDisplayName(categories: CategoryModel[]) {
    return categories.map((c) => c.displayName).join(' / ');
  }

  return (
    <div className='tool-card'>
      <div className="tool-card__cover">
        <a href={props.tool.url} target='_blank'>
          <img className='tool-card__cover__image' src={props.tool.coverUrl} alt="cover" />
        </a>
      </div>
      <div className="tool-card__data">
        <div className="tool-card__data__title">
          <span>{props.tool.title}: {props.tool.summary}</span>
          <div className="actions">
            <FavoriteIcon className='actions__item actions__item--active' />
          </div>
        </div>
        <div className="tool-card__data__categories">{getCategoriesDisplayName(props.tool.categories)}</div>
        <div className="tool-card__data__description">
          {props.tool.description}
        </div>
      </div>
    </div>
  );
}

export function SkeletonToolCard() {
  return (
    <div className='tool-card'>
      <div className="tool-card__cover">
        <Skeleton className='tool-card__cover__image' />
      </div>
      <div className="tool-card__data">
        <Skeleton count={5} />
      </div>
    </div>
  );
}