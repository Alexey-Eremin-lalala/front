'use client';
import Styles from './Promo.module.css'
import { useState, useEffect } from 'react';


export const Promo = () => {
  const [codeIsVisible, setcodeIsVisible] = useState(false)
  const handleButtonClick = () => {
    if (!codeIsVisible) {
      setcodeIsVisible(true);
    }
  }
  useEffect(() => {
    let timeout
    if (codeIsVisible) {
      timeout = setTimeout (() => setcodeIsVisible(false), 5000);
    }
  }

  )
  return (
    <section className={Styles["promo"]}>
      <div className={Styles["promo__description-block"]}>
        <h2 className={Styles["promo__title"]}>Твой промо-код</h2>
        <p className={Styles["promo__description"]}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
        <button className={`button ${'promo__button'}`} onClick={handleButtonClick}>{codeIsVisible ? <span className={Styles["promo-code"]}>WEBTEENS10</span> : <span className={Styles["promo-code"]}>Получить код</span>}</button>
      </div>
      <img src="./images/promo-illustration.svg" alt="Собака" className={Styles["promo__image"]} />
    </section>
  )
}