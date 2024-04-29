import Button from '../button';
import styles from './styles.module.scss';
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
  handleChangePage: (page: number) => void;
}

const PAGE_COUNT = 4;

function Pagination({ currentPage, handleChangePage }: PaginationProps) {
  const [_, setSearchParams] = useSearchParams();

  function createPageArray() {
    const pageArr: number[] = [];

    for (let i = 1; i <= 500; i++) {
      pageArr.push(i);
    }

    if (currentPage <= 2 && pageArr.length > PAGE_COUNT) {
      return [
        1,
        ...pageArr.slice(
          currentPage - (currentPage - 1),
          currentPage + PAGE_COUNT
        ),
        0,
        500,
      ];
    }

    if (pageArr.length > PAGE_COUNT && currentPage < 495 && currentPage !== 1) {
      return [
        1,
        0,
        ...pageArr.slice(currentPage - 1, currentPage + PAGE_COUNT),
        0,
        500,
      ];
    }

    if (currentPage >= 495) {
      return [1, 0, ...pageArr.slice(currentPage - 1)];
    }

    return [];
  }

  return (
    <div className={ styles.container }>
      <Button
        className={ `${styles.item } ${ styles.arrow }`}
        ariaLabel={ `Перейти на страницу ${ currentPage - 1 }` }
        onClick={() => {
          handleChangePage(currentPage - 1);
          setSearchParams({ page: `${ currentPage - 1 }` });
        }}
        isDisable={currentPage === 1}
      >
        &lt;
      </Button>
      {
        createPageArray().map((page, index) => {
          if (page === 0) {
            return (
              <span key={ `${index}_${page}` } className={ styles.dots }>
                ...
              </span>
            );
          }
          return (
            <Button
              key={ page }
              className={ `${ styles.item } ${ page === currentPage ? styles.active : '' }` }
              ariaLabel={ `Перейти на страницу ${page}` }
              onClick={() => {
                handleChangePage(page);
                setSearchParams({ page: `${page}` });
              }}
            >
              { page }
            </Button>
          );
        })
      }
      <Button
        className={ `${ styles.item } ${ styles.arrow }` }
        ariaLabel={ `Перейти на страницу ${ currentPage + 1 }` }
        onClick={() => {
          handleChangePage(currentPage + 1);
          setSearchParams({ page: `${ currentPage + 1 }` });
        }}
        isDisable={ currentPage === 500 }
      >
        &gt;
      </Button>
    </div>
  );
}

export default Pagination;