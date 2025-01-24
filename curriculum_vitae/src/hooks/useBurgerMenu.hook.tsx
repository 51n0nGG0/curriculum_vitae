import { useState, useEffect } from 'react';

export const useBurgerMenu = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = burgerOpen ? 'hidden' : 'auto';
  }, [burgerOpen]);

  return { burgerOpen, setBurgerOpen };
};