import * as React from 'react';
import ApiPage from 'docs/src/modules/components/ApiPage';
import mapApiPageTranslations from 'docs/src/modules/utils/mapApiPageTranslations';
import jsonPageContent from './skeleton.json';

export default function Page(props) {
  const { descriptions, pageContent } = props;
  return <ApiPage descriptions={descriptions} pageContent={pageContent} />;
}

export function getStaticProps() {
  const req = require.context('docs/translations/api-docs/skeleton', false, /skeleton.*.json$/);
  const descriptions = mapApiPageTranslations(req);

  return {
    props: {
      descriptions,
      pageContent: jsonPageContent,
    },
  };
}