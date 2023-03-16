import HeaderSecondaryCatalog from './HeaderSecondaryCatalog';
import HeaderPrimary from './../header/HeaderPrimary';

export default function HeaderCatalog() {
  return (
    <>
      <section className="header-secondary-catalog">
        <HeaderSecondaryCatalog></HeaderSecondaryCatalog>
      </section>

      <section className="header-primary">
        <HeaderPrimary></HeaderPrimary>
      </section>
    </>
  );
}
