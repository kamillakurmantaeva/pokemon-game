import s from './style.module.css';

const Layout = (props) => {
  const style = {};
  if (props.urlBg) {
    style.backgroundImage = `url(${props.urlBg})`;
  }
  if (props.colorBg) {
    style.backgroundColor = props.colorBg;
  }
  return (
    <section className={s.root} style={style}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {props.title && <h3>{props.title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={[s.desc, s.full].join(' ')}>
            {props.children && <p>{props.children}</p>}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
