import cn from 'classnames';
import s from './style.module.css';

const NavBar = ({ isOpen, bgActive = false, onChangeMenu }) => {
  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, { [s.active]: isOpen })}
          onClick={onChangeMenu}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
