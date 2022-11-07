import MainPage from '../../pages/main/main-page';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  cardsCount: number;
};

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <MainPage cardsCount={cardsCount} />
    </HelmetProvider>
    
  );
}

export default App;
