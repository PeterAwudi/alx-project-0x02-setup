import styles from './Card.module.css';
import type { CardProps } from '../interfaces';
import type { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

export default Card;
