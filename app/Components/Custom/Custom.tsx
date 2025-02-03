'use client';
import React, { useEffect, useState } from 'react';
import styles from './Custom.module.css';
import { customAdoptionData } from '@/app/Lib/Data';
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

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Custom: React.FC = () => {
  const [displayedData, setDisplayedData] = useState<Pet[]>(() => {
    const initialShuffledData = shuffleArray([...customAdoptionData]);
    return initialShuffledData.slice(0, 2);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newShuffledData = shuffleArray([...customAdoptionData]);
      setDisplayedData(newShuffledData.slice(0, 2));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className={styles.Custom}>
        <Link href={'/'} className={styles.CustomRow}>
          {displayedData.map((CustomMain) => (
            <div className={styles.CustomBox} key={CustomMain.id}>
              
              <img src={CustomMain.ImgUrl} alt={CustomMain.Breed} />
              <div className={styles.CustomBoxContent}>
                <h6>{CustomMain.Category}</h6>
                <h5>{CustomMain.Breed}</h5>
                <div>
                  <p>Cinsiyet: {CustomMain.Gender}</p>
                  <p>Yaş: {CustomMain.Age}</p>
                </div>
                <p className={styles.Desc}>{CustomMain.Description}</p>
              </div>
            </div>
          ))}
        </Link>
      </section>
    </>
  );
};

export default Custom;
