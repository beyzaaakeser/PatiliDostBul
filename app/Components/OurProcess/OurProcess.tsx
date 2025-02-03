import React from 'react';
import styles from './OurProcess.module.css';
import Content from '../Content/Content';
import { ProcessData } from '@/app/Lib/Data';

const OurProcess: React.FC = () => {
  return (
    <>
      <section className={styles.OurProcess}>
        <Content h6Text="Sürecimiz" />

        <div className={styles.OurProcessRow}>
          {ProcessData.map((mainProcess) => (
            <div className={styles.OurProcessBox} key={mainProcess.id}>
              <h6>{mainProcess.ProcessName}</h6>
              {mainProcess.ProcessDetails.map((cMainProcess, index) => (
                <p key={index}>{cMainProcess.ProcessDetails_Header}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProcess;
