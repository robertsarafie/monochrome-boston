import Link from 'next/link';

export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <Link href="/" title="Monochrome watch">
            <picture>
              <img src="/images/products/watch-01.png" alt="Watch" />
            </picture>
          </Link>

          <Link href="/" title="Wishlist" className="wishlist">
            <i className="fa-regular fa-heart"></i>
          </Link>
        </div>

        <h1 className="product-tile-title">
          <Link href="/" title="Monochrome watch">
            Monochrome
          </Link>
        </h1>
      </header>

      <section className="product-tile-pricing">
        <span className="product-tile-price">$425</span>
      </section>
    </article>
  );
}
