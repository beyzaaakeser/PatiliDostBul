import styles from './page.module.css';
import { GalleryData } from './Lib/Data';
import Button from './Components/Button/Button';

export default function Home() {
  return (
    <>
      <section className={styles.Home}>
        <div className={styles.HomeContentMain}>
          <div className={styles.HomeContent}>
            <h6>Kuyruklu Dostlarımız..</h6>
            <h5>Kurtar, Sahiplen ve Fark Yarat!</h5>
            <Button LinkText="Detayları Gör" LinkTo="/" />
          </div>
        </div>
      </section>

      <section className={styles.DiffImages}>
        {GalleryData.map((DiffMain) => (
          <div className={styles.DiffBox} key={DiffMain.id}>
            <img src={DiffMain.ImgUrl} alt="Evcil Hayvan Fotoğrafı" />
          </div>
        ))}
      </section>
    </>
  );
}
