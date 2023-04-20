import { NextPage } from "next";
import Card from "../components/card";
import styles from "../styles/projects.module.css";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div className={styles.titleWrapper}>
            <img
              src="https://icongr.am/fontawesome/bicycle.svg?size=28&color=FFFFFF"
              alt="icon"
            />
            <h1 className={styles.title}>Projets</h1>
          </div>
          <h2 className={styles.country}>Géographie : France</h2>
          <h3 className={styles.type}>Type : Marché primaire</h3>
        </div>
        <div className={styles.filterWrapper}>
          <img
            src="https://icongr.am/fontawesome/filter.svg?size=20&color=ffffff"
            alt="filter"
          />
          <h4 className={styles.filter}>Filtres</h4>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Card
          title="H2Air"
          status="collecte en cours"
          type="Champ d’éoliennes dans l'Aveyron"
          percentage={50}
          aimed="500k euros"
          debtType="Dette convertible"
          rendement="Rendement annuel : 9%"
          duration="3 ans"
        />
      </div>
      <div className={styles.cardContainer}>
        <Card
          title="Solaris"
          status="collecte en cours"
          type="Ferme solaire sur le bassin parisien"
          percentage={80}
          aimed="700k euros"
          debtType="Dette convertible"
          rendement="Rendement annuel : 6%"
          duration="2 ans"
        />
      </div>
      <div className={styles.cardContainer}>
        <Card
          title="Elek’en’stock"
          status="collecte en cours"
          type="Usine de stockage d'électricité"
          percentage={35}
          aimed="900k euros"
          debtType="Dette convertible"
          rendement="Rendement annuel : 11%"
          duration="4 ans"
        />
      </div>
    </div>
  );
};
export default Projects;
