import Link from 'next/link';

export default function CatalogCtas() {
  return (
    <div className="catalog-ctas">
      <Link href="/" title="view all">
        <button className="button button-va-small d-lg-none">view all</button>
        <button className="button d-none d-lg-block">view all</button>
      </Link>
    </div>
  );
}
