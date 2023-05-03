import { TweetsList } from './pages/TweetsPage/TweetsPage';

import { Section } from './components/Common/Section/Section';
import { Container } from './components/Common/Conteiner/Conteiner';

function App() {
  return (
    <>
      <Section>
        <Container>
          <TweetsList />
        </Container>
      </Section>
    </>
  );
}

export default App;
