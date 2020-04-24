import Header from '../components/header/index'
import Footer from '../components/footer'
import HtmlHead from '../components/head'

import style from '../style'

const MainLayout = props => (
  <div>
    <style jsx global>{`
      :root {
        font-size: ${style.rootFontSizeSm}
      }
      body {
        font-family: ${style.fontFamily};
        padding: 15px 15px 0 15px;
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
        min-height: calc(100vh - 64.8px - 56px - 15px); ${/* header, footer, body padding */''}
      }
      ul {
        list-style: none;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .container-fluid {
        width: 100vw;
        margin: 0 0 0 -15px;
      }

      @media only screen and (min-width: ${style.screenMd}){
        :root {
          font-size: ${style.rootFontSizeLg}
        }
        body {
          padding: 20px 20px 0 20px;
        }
        .container-fluid {
          margin: 0 0 0 -20px;
        }
        main {
          min-height: calc(100vh - 89.2px - 59px - 20px); ${/* header, footer, body padding */''}
        }
      }

      @media only screen and (min-width: ${style.screenLg}){
        main {
          min-height: calc(100vh - 115.5px - 59px - 20px); ${/* header, footer, body padding */''}
        }
      }
    `}</style>

    <HtmlHead />
    <Header />
    <main>
      <div>
        {props.children}
      </div>
    </main>
    <Footer />
    
  </div>
)

export default MainLayout;