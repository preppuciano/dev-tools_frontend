import Skeleton from 'react-loading-skeleton';
import { getCategories } from '../../../api/categoryAPI';
import useFetch from '../../../hooks/useFetch';
import Divider from '../../Divider';
import Menu from '../../Menu';
import CategoryMenuButton from '../../Menu/components/CategoryMenuButton/CategoryMenuButton';
import Searcher from '../../Searcher';
import './Sidebar.scss';
import { getToolCount } from '../../../api/toolAPI';

export default function Sidebar() {
  const { data, isLoading } = useFetch(() => getCategories());
  const { data: fetchTotal, isLoading: isLoadingFetchTotal } = useFetch(() => getToolCount());

  return (
    <div className='sidebar'>
      <Searcher />
      <Menu>
        <Menu.Head>Categories</Menu.Head>
        <Menu.Body>
          {
            isLoading ?
              <Skeleton count={10} />
              :
              data?.map((category) => <CategoryMenuButton key={category._id} category={category} />)
          }
        </Menu.Body>
      </Menu>
      <Divider />
      <div className='total-resources'>
        <span className="total-resources__name">TOTAL RESOURCES: </span>
        <span className="total-resources__value">
          {
            isLoadingFetchTotal ?
              <Skeleton inline={true} width={"2rem"} />
              :
              <>{fetchTotal}</>
          }
        </span>
      </div>
    </div>
  );
}