import React from 'react';
import styles from './Footer.module.css';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import { petsAdoptionData, ProcessData } from '@/app/Lib/Data';
import Link from 'next/link';

const AboutLinksData = [
  {
    A_Link_Text: 'Kariyer',
    A_Link_To: '/',
  },
  {
    A_Link_Text: 'Gizlilik',
    A_Link_To: '/',
  },
  {
    A_Link_Text: 'SOS',
    A_Link_To: '/',
  },
  {
    A_Link_Text: 'Kayıt Ol',
    A_Link_To: '/',
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <section className={styles.Footer}>
        <div className={styles.MainFooter}>
          <div className={styles.FooterImage}>
            <img src="/assets/logo4N.png" alt="Logo" />
          </div>

          <div className={styles.LinksFooter}>
            <h6>Sürecimiz</h6>
            {ProcessData.map((Custom) => (
              <div className={styles.LinksFooterBox} key={Custom.id}>
                <Link href={''}>
                  <MdKeyboardDoubleArrowRight />
                  {Custom.ProcessName}
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.LinksFooter}>
            <h6>Kategoriler</h6>
            {petsAdoptionData
              .filter(
                (pet, index, self) =>
                  self.findIndex((p) => p.Category === pet.Category) === index
              )
              .map((uniquePet) => (
                <div className={styles.LinksFooterBox} key={uniquePet.id}>
                  <Link href={''}>
                    <MdKeyboardDoubleArrowRight />
                    {uniquePet.Category}
                  </Link>
                </div>
              ))}
          </div>

          <div className={styles.LinksFooter}>
            <h6>Hakkımızda</h6>
            {AboutLinksData.map(({ A_Link_Text, A_Link_To }, index) => (
              <div className={styles.LinksFooterBox} key={index}>
                <Link href={A_Link_To}>
                  <MdKeyboardDoubleArrowRight />
                  {A_Link_Text}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.FooterMess}>
          <h5>&copy; Beyza KESER</h5>
          <h5>Bütün Hakları Saklıdır.</h5>

          <div>
            <Link href={"https://github.com/beyzaaakeser"}><FaGithub/></Link>
            <Link href={"https://www.linkedin.com/in/beyzakeser"}><FaLinkedin/></Link>
            <Link href={"https://medium.com/@beyzakeser"}><FaMedium /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
