import styles from './styles.module.scss';

interface DescriptionItemProps {
  title: string;
  text: string | string[];
}

function DescriptionItem({ title, text }: DescriptionItemProps) {
  return (
    <div className={ styles.container }>
      <span className={ styles.title }>{ title }:</span>
      <span className={ styles.text }>
        { text }
      </span>
    </div>
  );
}

export default DescriptionItem;
