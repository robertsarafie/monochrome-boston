import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';

export default function Home() {
  return (
    <div>
      <header className="header">
        <Header></Header>
      </header>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
