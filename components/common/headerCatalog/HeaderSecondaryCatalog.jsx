import Link from 'next/link';

export default function HeaderSecondaryCatalog() {
  return (
    <>
      <div className="header-secondary-catalog-monochrome d-none d-lg-block">
        <Link href="/" title="Main Page">
          <h1>Monochrome</h1>
        </Link>
      </div>

      <div className="header-secondary-catalog-inner container">
        <div className="header-secondary-catalog-connect mt-3 d-none d-lg-block">
          <ul>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="tel:+0741123456" title="Call us">
                call us +44 (0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <h1 className="header-secondary-catalog-title mt-3 d-lg-none">
          Monochrome
        </h1>

        <div className="header-secondary-catalog-controls mt-3">
          <ul>
            <li className="search-bar d-none d-lg-block">
              <form>
                <button type="submit" title="Search">
                  <i className="fa-solid fa-search"></i>
                </button>

                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                ></input>
              </form>
            </li>

            <li>
              <Link href="/" title="My Account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Favorites">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
