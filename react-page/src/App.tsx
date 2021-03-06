import React from 'react';
import styled from 'styled-components';

import Networks from './components/sections/Networks';
import Apresentation from './components/sections/Apresentation';
import Portfolio from './components/sections/Portfolio';

function App() {
  return (
    <Container>
      <Networks />
      <Apresentation />
      <Portfolio />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`