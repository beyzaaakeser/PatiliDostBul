import React from 'react';
import styles from './PetAdoption.module.css';
import { petsAdoptionData } from '@/app/Lib/Data';
import Link from 'next/link';

const PetAdoptionBox = () => {
  return (
    <>
      <div className={styles.PetAdoptionRow}>
        {petsAdoptionData.slice(0,8).map((MainBox) => (
          <div className={styles.PetAdoptionBox}>
            <h5>{MainBox.Breed}</h5>
            <img src={MainBox.ImgUrl} alt={MainBox.Category} />
            <div className={styles.PetAdoptionBoxContent}>
              <h6>{MainBox.Category}</h6>
              <div className={styles.CustomB}>
                <p>Cinsiyet: {MainBox.Gender}</p>
                <p>Yaş: {MainBox.Age}</p>
              </div>
              <p className={styles.Desc}>{MainBox.Description}</p>
              <Link href={'/'}>Detayları Gör</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PetAdoptionBox;
