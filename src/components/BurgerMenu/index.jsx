'use client';
import React, { useState, useEffect } from 'react';
import Burger from './Burger';
import Menu from './Menu';
import './style.scss';

const BurgerMenu = ({ callBtn }) => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();

  const onCallBtn = () => {
    callBtn();
    setOpen(false);
  };

  useEffect(() => {
    const listener = (event) => {
      if (!node.current || node.current.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu onCallBtn={onCallBtn} open={open} setOpen={setOpen} />
    </>
  );
};

export default BurgerMenu;
