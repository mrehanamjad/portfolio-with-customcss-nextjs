import React from "react";
import styles from "@/styles/SkillCard.module.css";

function SkillCard({
  name,
  icon,
  level,
}: {
  name: string;
  icon: React.ReactNode;
  level: number;
}) {


  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon}>{icon}</div>
      <div className={styles.skillInfo}>
        <h3 className={styles.skillName}>{name}</h3>
        <div className={styles.skillLevelContainer}>
          <div
            className={styles.skillLevelBar}
            style={{ width: `${level}%` }}
          />
        </div>
      
      </div>
    </div>
  );
}

export default SkillCard;
