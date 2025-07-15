'use client';
import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import './style.scss';

const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  React.useEffect(() => {
    const listener = (event) => {
      if (!node.current || node.current.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

export default BurgerMenu;
