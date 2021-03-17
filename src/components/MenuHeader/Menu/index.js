import cn from 'classnames';
import s from './style.module.css';

const Menu = ({ changeMenu }) => {
  let routes = ['home', 'game', 'about', 'contact'];

  return (
    <div
      className={cn(
        s.menuContainer,
        { [s.active]: changeMenu },
        { [s.deactive]: !changeMenu }
      )}
    >
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {routes.map((route) => (
            <li>
              <a href={`#${route}`}>{route.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
