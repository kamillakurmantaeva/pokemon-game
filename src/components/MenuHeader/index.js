import { useState } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';
// import s from './style.module.css';

const MenuHeader = () => {
  const [isMenu, setMenu] = useState(false);
  const onChangeMenu = (menu) => {
    setMenu(menu);
  };

  return (
    <div>
      <Menu changeMenu={isMenu} />
      <NavBar changeMenu={isMenu} onChangeMenu={onChangeMenu} />
    </div>
  );
};

export default MenuHeader;
