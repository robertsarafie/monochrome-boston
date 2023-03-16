import Footer from '../components/common/footer/Footer';
import HeaderCatalog from '../components/common/headerCatalog/HeaderCatalog';
import Filter from '../components/common/homepage/Filter';
import LoadMore from '../components/common/homepage/LoadMore';
import ProductGrid from '../components/common/homepage/ProductGrid';

export default function Catalog() {
  return (
    <div id="catalog">
      <header className="header mb-3">
        <HeaderCatalog></HeaderCatalog>
      </header>

      <main>
        <header className="header-main container">
          <div className="header-main-content">
            <h1 className="header-main-content-title">Men`s</h1>
            <p className="header-main-content-description">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the.
            </p>
          </div>
          <Filter></Filter>
        </header>

        <div className="content-grid">
          <ProductGrid></ProductGrid>

          <ProductGrid></ProductGrid>

          <ProductGrid></ProductGrid>

          <ProductGrid></ProductGrid>

          <ProductGrid></ProductGrid>

          <ProductGrid></ProductGrid>
          <LoadMore></LoadMore>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
