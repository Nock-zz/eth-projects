import React from 'react';
import Header from './Header';
import Head from 'next/head'; //this allows the <Head> tag to be moved to the header of the generated html document
import {Container} from 'semantic-ui-react';

export default (props) => {
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
