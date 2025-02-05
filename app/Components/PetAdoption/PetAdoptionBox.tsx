import React from 'react';
import styles from './PetAdoption.module.css';
import Link from 'next/link';

interface Pet {
  id: number;
  ImgUrl: string;
  Category: string;
  Breed: string;
  Age: string;
  Gender: string;
  Description: string;
}

interface PetAdoptionBoxProps {
  pets: Pet[]; // pets prop'u bir Pet dizisi olacak
}

const PetAdoptionBox = ({ pets }: PetAdoptionBoxProps) => {
  return (
    <div className={styles.PetAdoptionRow}>
      {pets.slice(0, 8).map((pet) => (
        <div className={styles.PetAdoptionBox} key={pet.id}>
          <h5>{pet.Breed}</h5>
          <img src={pet.ImgUrl} alt={pet.Category} />
          <div className={styles.PetAdoptionBoxContent}>
            <h6>{pet.Category}</h6>
            <div className={styles.CustomB}>
              <p>Cinsiyet: {pet.Gender}</p>
              <p>Yaş: {pet.Age}</p>
            </div>
            <p className={styles.Desc}>{pet.Description}</p>
            <Link href={'/'}>Detayları Gör</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetAdoptionBox;
