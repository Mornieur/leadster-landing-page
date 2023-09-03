import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '../../lib/registry';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <StyledComponentsRegistry>
            <Main />
          </StyledComponentsRegistry>
          <NextScript />
        </body>
      </Html>
    );
  }
}
