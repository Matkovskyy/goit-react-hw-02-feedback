import PropTypes from 'prop-types';
import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={css.sectionTitle}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};