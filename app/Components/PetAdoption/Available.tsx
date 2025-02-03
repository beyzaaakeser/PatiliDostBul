import React from 'react';
import styles from './PetAdoption.module.css';
import Content from '../Content/Content';
import Link from 'next/link';
import PetAdoptionBox from './PetAdoptionBox';

const CategoriesD = [
  {
    CategoriesName: 'Hepsi',
    Categories_LinkTo: '/',
  },
  {
    CategoriesName: 'Kuş',
    Categories_LinkTo: '/',
  },
  {
    CategoriesName: 'Kedi',
    Categories_LinkTo: '/',
  },
  {
    CategoriesName: 'Köpek',
    Categories_LinkTo: '/',
  },
];

const Available: React.FC = () => {
  return (
    <>
      <section className={styles.PetAdoption}>
        <Content h6Text="Sahiplenmek İçin Uygun Hayvanlar" />

        <div className={styles.PetAdoption_Header}>
          {CategoriesD.map(({ CategoriesName, Categories_LinkTo }, index) => (
            <div className={styles.PetAdoption_HeaderBox} key={index}>
              <Link href={Categories_LinkTo}>{CategoriesName}</Link>
            </div>
          ))}
        </div>

       <PetAdoptionBox/>
      </section>
    </>
  );
};

export default Available;
