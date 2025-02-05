"use client"
import React, { useState } from 'react';
import styles from './PetAdoption.module.css';
import Content from '../Content/Content';
import PetAdoptionBox from './PetAdoptionBox';
import { petsAdoptionData } from '@/app/Lib/Data';

const CategoriesD = [
  {
    CategoriesName: 'Hepsi',
  },
  {
    CategoriesName: 'Kuş',
  },
  {
    CategoriesName: 'Kedi',
  },
  {
    CategoriesName: 'Köpek',
  },
];

const Available: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi'); 

  // Kategoriye göre filtreleme
  const filteredPets = selectedCategory === 'Hepsi' 
    ? petsAdoptionData 
    : petsAdoptionData.filter(pet => pet.Category === selectedCategory);

  return (
    <>
      <section className={styles.PetAdoption}>
        <Content h6Text="Sahiplenmek İçin Uygun Hayvanlar" />

        <div className={styles.PetAdoption_Header}>
          {CategoriesD.map(({ CategoriesName }, index) => (
            <div
              className={styles.PetAdoption_HeaderBox}
              key={index}
              onClick={() => setSelectedCategory(CategoriesName)}
            >
              <span className={styles.PetAdoption_HeaderBoxSpan}>{CategoriesName}</span> 
            </div>
          ))}
        </div>

        <PetAdoptionBox pets={filteredPets} /> 
      </section>
    </>
  );
};

export default Available;
