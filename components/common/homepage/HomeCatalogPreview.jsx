import ProductTile from '../../catalog/ProductTile';

export default function HomeCatalogPreview() {
  return (
    <section className="home-catalog-preview container">
      <header>
        <h1>Spring Collection</h1>
      </header>

      <ul className="product-tiles">
        <li>
          <ProductTile></ProductTile>
        </li>
        <li>
          <ProductTile></ProductTile>
        </li>
        <li>
          <ProductTile></ProductTile>
        </li>
        <li>
          <ProductTile></ProductTile>
        </li>
      </ul>
    </section>
  );
}
