import { Card } from './components/Card';
import { GameStart } from './components/GameStart';
import { Header } from './components/Header';
import { useCat } from './contexts/CatContext';
import { usePlayer } from './contexts/PlayerContext';
import { StyledContainer } from './styles/Container.styled';
import { GameEnd } from './components/GameEnd';

function App() {
  const { cats } = useCat();
  const { gameStatus } = usePlayer();

  return (
    <>
      <Header />
      <StyledContainer>
        {cats.map((cat, index) => (
          <Card key={index} catId={cat.catId} />
        ))}
        {gameStatus === 'start' && <GameStart />}
        {gameStatus === 'end' && <GameEnd />}
      </StyledContainer>
    </>
  );
}

export default App;
