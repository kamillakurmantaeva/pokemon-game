import './style.module.css';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  };

  return (
    <div>
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default GamePage;
