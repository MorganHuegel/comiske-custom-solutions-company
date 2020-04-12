import Header from '../components/header/index'
import Footer from '../components/footer'
import HtmlHead from '../components/head'

import style from '../style'
import { useEffect, useState } from 'react'

const MainLayout = props => (
  <div>
    <style jsx global>{`
      body {
        font-family: ${style.fontFamily};
        padding: 20px;
        margin: 0;
      }
      body * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      button:hover {
        cursor: pointer;
      }
      .hidden {
        display: none;
      }
      main {
        min-height: calc(100vh - 108px - 58px)
      }
      ul {
        list-style: none;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
    `}</style>

    <HtmlHead />
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
    
  </div>
)

export default MainLayout;