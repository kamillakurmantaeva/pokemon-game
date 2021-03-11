import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import ImageFirst from './assets/bg1.png';
import ImageSecond from './assets/bg2.jpg';

const App = () => {
  return (
    <>
      <Header title="This is Title" descr="This is Description!" />
      <Layout title="Title" descr="description" urlBg={ImageFirst} />
      <Layout title="Title" descr="description" colorBg="red" />
      <Layout title="Title" descr="description" urlBg={ImageSecond} />
      <Footer />
    </>
  );
};

export default App;
