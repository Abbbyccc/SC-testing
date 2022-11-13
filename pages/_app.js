// import React, { useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import GlobalMonth from '../lib/GlobalMonth'
//import { loadVeg } from '../lib/loadVeg.js'

function MyApp({ Component, pageProps }) {
    // const [currentMonth, setCurrentMonth] = useState(0)
    // setCurrentMonth(new Date().getMonth())
    const currentMonth = new Date().getMonth()
    // object or array with season and month numbers
    // Get winter [11, 0, 1] // spring [2,3,4] //
    //
    return (
        <GlobalMonth.Provider value={currentMonth}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalMonth.Provider>
    )
}

export default MyApp
