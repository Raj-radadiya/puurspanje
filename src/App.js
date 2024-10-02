import './App.css';
import Header from './layout/header';
import Puurspanje from './rendering';
import Footer from './layout/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <Header />
      <Puurspanje />
      <Footer />
    </div>
  );
}

export default App;
