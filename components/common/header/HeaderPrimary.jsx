import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <div className="header-search container d-lg-none">
        <ul>
          <li>
            <Link href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </li>

          <li>
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
              ></input>

              <button type="submit" title="Search">
                <i className="fa-solid fa-search"></i>
              </button>
            </form>
          </li>
        </ul>
      </div>

      <div className="header-primary-inner container d-none d-lg-block">
        <ul>
          <li>
            <Link href="/" title="New Arrivals">
              New Arrivals
            </Link>
          </li>

          <li>
            <Link href="/" title="Brands">
              Brands
            </Link>
          </li>

          <li>
            <Link href="/Catalog" title="Men`s">
              Men`s
            </Link>
          </li>

          <li>
            <Link href="/" title="Women`s">
              Women`s
            </Link>
          </li>

          <li>
            <Link href="/" title="Accessories">
              Accessories
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
