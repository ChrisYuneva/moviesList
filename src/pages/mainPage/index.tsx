import Card from '../../components/card';
import styles from './styles.module.scss';
import { useGetMovies } from '../../api';
import Loading from '../../components/loading';
import Pagination from '../../components/pagination';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function MainPage() {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+(searchParams.get('page') ?? 1));
  const { data, error, isLoading, isFetching } = useGetMovies(currentPage);

  function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  return (
    <>
      { isLoading && <Loading /> }
      {
        !isFetching && data && (
          <section className={ `wrapper ${styles.container}` }>
          <div className={ styles.content }>
            { data?.results.map((movie) => (
              <Card
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                imgSrc={movie.poster_path}
                key={movie.id}
              />
            )) }
          </div>
          <Pagination 
            currentPage={currentPage} 
            handleChangePage={handleChangePage}
          />
        </section>
        )
      }
      {error && <h2 className={styles.error}>{error.message}</h2>}
    </>
  );
}

export default MainPage;