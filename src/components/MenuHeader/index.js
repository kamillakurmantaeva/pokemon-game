import { useState } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';
// import s from './style.module.css';

const MenuHeader = ({ bgActive }) => {
  const [isMenu, setMenu] = useState(null);
  const onChangeMenu = () => setMenu(!isMenu);

  return (
    <div>
      <Menu isOpen={isMenu} />
      <NavBar isOpen={isMenu} bgActive={bgActive} onChangeMenu={onChangeMenu} />
    </div>
  );
};

export default MenuHeader;
