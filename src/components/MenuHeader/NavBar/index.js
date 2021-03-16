import cn from 'classnames';
import s from './style.module.css';

const NavBar = ({ changeMenu, onChangeMenu }) => {
  const handleClick = () => {
    onChangeMenu && onChangeMenu(!changeMenu);
  };

  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={cn(s.menuButton, { [s.active]: changeMenu })}
          onClick={handleClick}
          href
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
