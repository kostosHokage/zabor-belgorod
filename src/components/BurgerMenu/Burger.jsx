import React from 'react';
import './style.scss';

const Burger = ({ open, setOpen }) => (
  <button
    className={`custom-burger${open ? ' open' : ''}`}
    onClick={() => setOpen(!open)}
    aria-label="Открыть меню"
    type="button"
  >
    <div />
    <div />
    <div />
  </button>
);

export default Burger;
