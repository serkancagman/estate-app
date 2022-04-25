import React from 'react'
import Head from 'next/head'

import { Header,Footer,BreadCrumb } from 'components'
const products = () => {
  return (
    <>
     <Head>
        <title>Best Budget homes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <BreadCrumb currentTitle="Adverts" />

        <Footer />
      </main>
    </>
  )
}

export default products