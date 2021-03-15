import React from "react";
import s from "../Feedback/Feedback.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
