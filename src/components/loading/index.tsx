import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loading;
