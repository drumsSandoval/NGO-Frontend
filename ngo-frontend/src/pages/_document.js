import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;