import ProductTile from '../../catalog/ProductTile';

export default function ProductGrid() {
  return (
    <section className="product-grid container">
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
