import WeaponsDetails from '@containers/weaponsDetails'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                <title>{"Get Diamonds"}</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9600659467567882"
                    crossorigin="anonymous"></script>

            </Head>
            <WeaponsDetails />
        </Fragment>
    )
}

export default index
