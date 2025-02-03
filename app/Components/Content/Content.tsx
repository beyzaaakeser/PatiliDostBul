import React from 'react';
import styles from './Content.module.css';

interface ContentProps {
  h6Text: string;
}

const Content: React.FC<ContentProps> = ({h6Text}) => {
  return (
    <>
      <div className={styles.Content}>
        <h6>{h6Text}</h6>
      </div>
    </>
  );
};

export default Content;
