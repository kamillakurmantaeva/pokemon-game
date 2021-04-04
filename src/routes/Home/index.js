import Header from '../../components/Header';
import Layout from '../../components/Layout';
import imageFirst from '../../assets/bg1.png';
import imageSecond from '../../assets/bg2.png';

const HomePage = () => {
  return (
    <>
      <Header
        title="Pokemon Game"
        descr="This is simple triple triad card game"
      />
      <Layout title="Description" urlBg={imageFirst}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>
      <Layout title="Rules" urlBg={imageSecond}>
        <p>
          Triple Triad is played on a three-by-three (3x3) square grid of blank
          spaces where cards will be placed as the game progress. Each card has
          four numbers (known as Ranks) placed in top left corner; each number
          corresponds to one of the four sides of the card. These numbers range
          from one to ten.
        </p>
        <p>
          In a basic game each player has five cards. A coin-flip decides who
          begins. The player who wins the coin toss may choose a card to play
          anywhere on the grid. After the first card is played, the opposing
          player may play a card on any unoccupied space on the board. The game
          continues with players' turns alternating.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </p>
      </Layout>
    </>
  );
};

export default HomePage;
