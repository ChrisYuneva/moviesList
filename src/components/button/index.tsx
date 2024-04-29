import styles from './styles.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    ariaLabel: string;
    onClick: () => void;
    className?: string;
    isDisable?: boolean;
}

function Button({ children, ariaLabel, className, isDisable, onClick }: ButtonProps) {
    return (
        <button 
            className={ `${styles.btn} ${className}` } 
            onClick={ onClick } 
            aria-label={ ariaLabel }
            disabled={ isDisable }
        >
            { children }
        </button>
    )
}

export default Button;