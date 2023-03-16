import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HomePage } from './components/homepage';
import { NotFound } from './components/NotFound';
import { Details } from './features/details/Details';
import { Wrapper } from './wrapper';


function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/town/:name" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
