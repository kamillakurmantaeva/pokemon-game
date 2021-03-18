// import './style.module.css';

import { useHistory } from 'react-router';

const AboutPage = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div>
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default AboutPage;
