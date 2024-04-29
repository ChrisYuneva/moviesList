import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
    return (
        <header className={ `wrapper ${styles.header}` }>
            <Link to="/" className={ styles.link }>КиноСписок</Link>
        </header>
    )
}

export default Header;