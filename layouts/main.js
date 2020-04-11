import {useState} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HtmlHead from '../components/head'

import style from '../style'

const MainLayout = props => (
    <div>
      <style jsx global>{`
        body {
          font-family: ${style.fontFamily};
          background-color: ${style.lightGrayColor};
          padding: 0;
          margin: 0;
        }
        body * {
          box-sizing: border-box;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>

      <HtmlHead />

      <Header />

      {props.children}

      <Footer />
      
    </div>
)

export default MainLayout;