import { useEffect, useState } from 'react';
import styles from './Calculator.module.scss';

const Calculator = () => {
  const [valueTrips, setValueTrips] = useState(1);
  const [valueEmployees, setValueEmployees] = useState(1);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(valueTrips * 29.99 - (29, 99 - 0.02499) / 1000 + 1790 * valueEmployees);
  }, [valueTrips, valueEmployees]);

  return (
    <div className={styles.calculator}>
      <h2 className={styles.calculator__title}>Калькулятор решения</h2>

      <div className={styles.calculator__container}>
        <div className={styles.calculator__wrapper}>
          <div className={styles.calculator__tab}>
            <p className={styles.calculator__subtitle}>Кол-во выездов/мес:</p>
            <input
              type="range"
              className={styles.calculator__range}
              onChange={(event) => setValueTrips(event.target.value)}
              value={valueTrips}
              min={1}
              max={1000}
            />
            <div className={styles.calculator__bottom}>
              <p className={styles.calculator__quantity}>{valueTrips}</p>
              <p className={styles.calculator__quantity_max}>1000</p>
            </div>
          </div>

          <div className={styles.calculator__tab}>
            <p className={styles.calculator__subtitle}>Кол-во сотрудников*</p>
            <input
              type="range"
              className={styles.calculator__range}
              onChange={(event) => setValueEmployees(event.target.value)}
              value={valueEmployees}
              min={1}
              max={100}
            />
            <div className={styles.calculator__bottom}>
              <p className={styles.calculator__quantity}>{valueEmployees}</p>
              <p className={styles.calculator__quantity_max}>100</p>
            </div>
          </div>
        </div>

        <div className={styles.calculator__check}>
          <div className={styles.calculator__row}>
            <p className={styles.calculator__subtitle}>Стоимость вызовов/мес:</p>
            <p className={styles.calculator__price}>29,99 руб.</p>
          </div>

          <div className={styles.calculator__row}>
            <p className={styles.calculator__subtitle}>Аренда ПО (до 201 выезда):</p>
            <p className={styles.calculator__price}>990 руб/мес.</p>
          </div>

          {/* <div className={styles.calculator__row}>
            <p className={styles.calculator__subtitle}>Повторные выезды:</p>
            <p className={styles.calculator__price}>10 руб.</p>
          </div>

          <div className={styles.calculator__row}>
            <p className={styles.calculator__subtitle}>Госпитализация в клинику:</p>
            <p className={styles.calculator__price}>10 руб.</p>
          </div>

          <div className={styles.calculator__row}>
            <p className={styles.calculator__subtitle}>Передача в стационар:</p>
            <p className={styles.calculator__price}>10 руб.</p>
          </div> */}

          <div className={styles.calculator__row}>
            <p className={styles.calculator__subtitle}>Выпуск мобильной УКЭП:</p>
            <p className={styles.calculator__price}>2790 руб./сотрудник (365 дней)*</p>
            <div className={styles.calculator__popup}>
              По умолчанию тариф выпуска УКЭП стоит на 1 год использования. Вы можете выбрать
              интервалы: 2 недели, месяц, 6 месяцев и год соответствено. Выпуск УКЭП является
              обязательным для использования системы.
            </div>
          </div>

          <div className={styles.calculator__inner}>
            {/* <div className={styles.calculator__row}>
              <p className={styles.calculator__subtitle}>Начислим бонусом:</p>
              <p className={styles.calculator__price}>50 бонусов</p>
            </div> */}

            <div className={styles.calculator__row}>
              <p className={styles.calculator__subtitle}>Итого AmeOli:</p>
              <p className={styles.calculator__price}>2239,99 руб</p>
            </div>

            <div className={styles.calculator__row}>
              <p className={styles.calculator__subtitle}>Авансовые платежи (УКЭП):</p>
              <p className={styles.calculator__price}>2790 руб</p>
            </div>

            <div className={`${styles.calculator__row} ${styles.calculator__row_total}`}>
              <p className={styles.calculator__subtitle}>Итого:</p>
              <p className={styles.calculator__price}>{totalPrice} руб</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
