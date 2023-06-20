import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
