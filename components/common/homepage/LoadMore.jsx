import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LoadMore() {
  return (
    <div className="load-more">
      <Link href="/" title="load-more" className="load-more">
        <button className="button button-va-small d-lg-none load">
          load more
        </button>
        <button className="button d-none d-lg-block load">load more</button>
        <span className="loading"></span>
      </Link>
    </div>
  );
}
