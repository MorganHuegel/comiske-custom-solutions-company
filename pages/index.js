import Header from '../components/header'
import Footer from '../components/footer'
import HtmlHead from '../components/head'

import style from '../style'

const Landing = () => {
  return (
    <div>
      <style jsx global>{`
        body {
          background-color: red;
        }
      `}</style>
      <HtmlHead />
      <Header />
      <p>landing</p>
      <Footer />
    </div>
  )
}

export default Landing;