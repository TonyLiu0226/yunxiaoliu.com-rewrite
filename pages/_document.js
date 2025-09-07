import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeModeScript } from 'flowbite-react';
import {Card} from 'flowbite-react';


//custom document file to augment (add props to) HTML and body tags as required
//rendered on server
//usually no need change this, if want to add things like meta tags go to index.js
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <ThemeModeScript />
      </Head>
      <link rel="shortcut icon" href="YL.png" />
      <body >
        <Card>
          <Main />
        </Card>
        <NextScript />
      </body>
    </Html>
  )
}
