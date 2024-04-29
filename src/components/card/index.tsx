import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { getImageSrc } from '../../functions';
import star from '../../assets/star.svg';

interface CardProps {
    id: number;
    imgSrc: string;
    title: string;
    rating: number;
}

function Card({ id, imgSrc, title, rating }: CardProps) {
    const navigate = useNavigate();

    return (
        <article className= {styles.container } onClick={ () => navigate(`/movie/${id}`) }>
            <img src={ getImageSrc(imgSrc) } alt={ `Постер к фильму ${title}` } className={ styles.img } loading='lazy' />
            <div className={ styles.description }>
                <span className={ styles.title }>{ title }</span>
                <div className={ styles.rating }>
                    {
                        rating > 0 && (
                            <>
                                <img src={ star } className={ styles.ratingImg } alt='Иконка рейтинга' />
                                <span className={ styles.ratingItem }>{ rating.toFixed(1) }</span>
                            </>
                        ) 
                    }
                </div>
            </div>
        </article>
    )
}

export default Card;