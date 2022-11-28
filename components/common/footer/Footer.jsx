import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="footer-inner container-lg">
        <div className="footer-contact d-none d-lg-block">
          <ul className="footer-contact-inner">
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="call us">
                call us
              </a>
            </li>

            <li>
              <a href="tel:+44 (0)10 2345 6789" title="+44 (0)10 2345 6789">
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:hello@pixellab.ro" title="email customer care">
                email customer care
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-nav">
          <div className="footer-nav-inner">
            <h1 className="footer-nav-title d-lg-none">How can we help?</h1>

            <nav>
              <ul>
                <li>
                  <Link href="/" title="about us">
                    about us
                  </Link>
                </li>

                <li>
                  <Link href="/" title="careers">
                    careers
                  </Link>
                </li>

                <li>
                  <Link href="/" title="affiliates">
                    affiliates
                  </Link>
                </li>

                <li>
                  <Link href="/" title="advertising">
                    advertising
                  </Link>
                </li>
              </ul>

              <div className="vl d-lg-none"></div>

              <ul>
                <li>
                  <Link href="/" title="style and fit">
                    style and fit
                  </Link>
                </li>

                <li>
                  <Link href="/" title="faqs">
                    faqs
                  </Link>
                </li>

                <li>
                  <Link href="/" title="delivery">
                    delivery
                  </Link>
                </li>

                <li>
                  <Link href="/" title="returns">
                    returns
                  </Link>
                </li>
              </ul>
            </nav>

            <ul className="terms d-lg-none">
              <li>
                <Link href="/" title="terms & conditions">
                  terms & conditions
                </Link>
              </li>

              <li>
                <Link href="/" title="privacy & cookies">
                  privacy & cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-connect">
          <div className="footer-connect-inner container">
            <div className="footer-connect-newsletter container">
              <form>
                <label className="title d-lg-none" htmlFor="email">
                  Let`s connect
                </label>

                <div className="connect">
                  <label className="d-lg-none" htmlFor="email">
                    Be the first to receive exclusives offers
                  </label>

                  <label className="d-none d-lg-block" htmlFor="email">
                    sign up for our newsletter
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  ></input>
                </div>

                <div className="privacy">
                  <button
                    type="submit"
                    title="Submit"
                    className="button button-small"
                  >
                    Submit
                  </button>

                  <div className="privacy-inner">
                    <input type="checkbox" name="I agree" id="I agree"></input>
                    <label for="I agree">
                      I agree with{' '}
                      <Link href="/" title="Privacy Policy">
                        Privacy Policy
                      </Link>{' '}
                      and i want to receive emails from Monochrome
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="footer-connect-social container">
              <h1 className="footer-connect-social-title d-lg-none container">
                We are highly likeable
              </h1>

              <ul>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Youtube"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
