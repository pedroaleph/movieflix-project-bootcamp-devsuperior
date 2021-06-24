import { generateList } from 'core/utils/lists';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

type Props = {
  totalPages: number;
  activePage: number;
  onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
  const items = generateList(totalPages);
  const previousPage = totalPages > 0 && activePage > 0 ? 'active-page' : 'inactive-page';
  const nextPage = totalPages > (activePage + 1) ? 'active-page' : 'inactive-page';

  return (
    <div className="pagination-container">
      <ArrowIcon
        className={`pagination-previous ${previousPage}`}
        onClick={() => onChange(activePage - 1)}
      />
      {items.map(item => (
          <div
            key={item}
            className={`pagination-item ${item === activePage ? 'active' : ''}`}
            onClick={() => onChange(item)}
          >
            {item + 1}
          </div>
        ))
        }
      <ArrowIcon
        className={`pagination-next ${nextPage}`}
        onClick={() => onChange(activePage + 1)}
      />
    </div>
  )
}

export default Pagination;