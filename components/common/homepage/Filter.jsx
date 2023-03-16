import Link from 'next/link';

export default function Filter() {
  return (
    <div className="filters">
      <Link href="/" title="Bestsellers">
        <button className="button button-filter-black">Bestsellers</button>
      </Link>

      <Link href="/" title="$ Hight to low">
        <button className="button button-filter-white">$ Hight to low</button>
      </Link>

      <Link href="/" title="$ Low to high">
        <button className="button button-filter-black">$ Low to high</button>
      </Link>

      <Link href="/" title="New in">
        <button className="button button-filter-white">New in</button>
      </Link>

      <Link href="/" title="White">
        <button className="button button-filter-white">White</button>
      </Link>

      <Link href="/" title="Black">
        <button className="button button-filter-white">Black</button>
      </Link>
    </div>
  );
}
