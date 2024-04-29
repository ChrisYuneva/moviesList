import { useNavigate, useParams } from 'react-router-dom';
import { useGetMovieById } from '../../api';
import styles from './styles.module.scss';
import Loading from '../../components/loading';
import { getImageSrc } from '../../functions';
import DescriptionItem from '../../components/descriptionItem';

import star from '../../assets/star.svg';
import Button from '../../components/button';

function MoviePage() {
  const { id } = useParams();
  const { data, isLoading, isFetching, error } = useGetMovieById(id ?? '');

  const navigate = useNavigate();

  return (
    <>
      { (isLoading || isFetching) && <Loading /> }
      { !isFetching && data && (
        <section className={ `wrapper ${ styles.container }` }>
          <Button
            ariaLabel='Вернуться к списку фильмов'
            onClick={ () => navigate(-1) }
          >
            Вернуться к списку
          </Button>
          <div className={ styles.content }>
            <div className={ styles.poster }>
              <img
                src={ getImageSrc(data.poster_path) }
                className={ styles.img }
                alt={ `Постер фильма ${ data.title }` }
              />
            </div>
            <div className={ styles.description }>
              <div className={ styles.titleWrap }>
                <span className={ styles.title }>{ data.title }</span>
                <div className={ styles.rating }>
                  {
                    data.vote_average > 0 && (
                      <>
                        <img
                          src={ star }
                          className={ styles.ratingImg }
                          alt='Иконка рейтингка'
                        />
                        <span className={ styles.ratingItem }>
                          { data?.vote_average.toFixed(1) }
                        </span>   
                      </>
                    )
                  }
                </div>
              </div>
              <span className={ styles.text }>{ data?.overview }</span>
              <div className={ styles.about }>
                {
                  !!data.genres.length && <DescriptionItem title='Жанр' text={ data.genres.map((genre) => genre.name).join(', ') } /> 
                }
                {
                  data.release_date && <DescriptionItem title='Премьера' text={ data.release_date.split('-').reverse().join('.') } /> 
                }
                {
                  data.budget > 0 && <DescriptionItem title='Бюджет' text={`${data.budget} $`} />
                }
                {
                  data.runtime > 0 && <DescriptionItem title='Время' text={`${data.runtime} мин.`} />
                }
              </div>
            </div>
          </div>
        </section>
      ) }
      { error && <h2 className={styles.error}>{error.message}</h2> }
    </>
  );
}

export default MoviePage;