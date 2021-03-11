import s from './Layout.module.css';

const Layout = (props) => {
  const styleRoot =
    (props.urlBg && { background: `url(${props.urlBg})` }) ||
    (props.colorBg && { background: props.colorBg });
  return (
    <section className={s.root} style={styleRoot}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {props.title && <h3>{props.title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={[s.desc, s.full].join(' ')}>
            {props.descr && <p>{props.descr}</p>}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
