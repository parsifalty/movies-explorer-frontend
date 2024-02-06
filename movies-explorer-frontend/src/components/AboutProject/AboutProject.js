import React from "react";
import "./AboutProject.css";
import useDeviceType from "../Resizer/Resizer";

export default function AboutProject() {
  const isMobile = useDeviceType();
  console.log(isMobile);
  return (
    <section className="aboutproject" id="about">
      <div className="aboutproject__container">
        <h2 className="aboutproject__title">О проекте</h2>
        {isMobile.isMobile ? (
          <div className="aboutproject__grid">
            <div>
              <h3 className="aboutproject__grid-title">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="aboutproject__grid-paragraph">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div>
              <h3 className="aboutproject__grid-title">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="aboutproject__grid-paragraph">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
        ) : (
          <div className="aboutproject__grid">
            <h3 className="aboutproject__grid-title">
              Дипломный проект включал 5 этапов
            </h3>
            <h3 className="aboutproject__grid-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutproject__grid-paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
            <p className="aboutproject__grid-paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        )}
        <div className="aboutproject__flex">
          <span className="aboutproject__flex-text aboutproject__flex-text-one">
            1 неделя
          </span>
          <span className="aboutproject__flex-text aboutproject__flex-text-two">
            4 недели
          </span>
          <span className="aboutproject__flex-text aboutproject__flex-text-three">
            Back-end
          </span>
          <span className="aboutproject__flex-text aboutproject__flex-text-four">
            Front-end
          </span>
        </div>
      </div>
    </section>
  );
}
