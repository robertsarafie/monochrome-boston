import Link from 'next/link';
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import CatalogCtas from '../components/common/homepage/CatalogCtas';
import HomeCatalogPreview from '../components/common/homepage/HomeCatalogPreview';
import HomeContent from '../components/common/homepage/HomeContent';

export default function Home() {
  return (
    <div>
      <header className="header mb-lg-3">
        <Header></Header>
      </header>

      <main className="content">
        <header className="banner-main d-block d-lg-none">
          <div className="banner-main-inner container">
            <Link href="/" title="New In" className="button button-inverted">
              New in
            </Link>
          </div>
        </header>

        <div className="content-main">
          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeContent></HomeContent>

          <HomeCatalogPreview></HomeCatalogPreview>
          <CatalogCtas></CatalogCtas>

          <HomeCatalogPreview></HomeCatalogPreview>
          <CatalogCtas></CatalogCtas>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
