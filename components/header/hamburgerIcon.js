import React from 'react'
import styles from '../../style'

const HamburgerIcon = props => {
  return (
    <button onClick={props.onClick}>
      <span className='bar'/>
      <span className='bar'/>
      <span className='bar'/>
      <style jsx>{`
        button {
          display: flex;
          flex-direction: column;
          padding: 6px;
          background: none;
          border: 1px solid ${styles.lightGrayColor};
          border-radius: 6%;
          align-items: stretch;
          justify-content: space-around;
          width: 45px;
          height: 45px;
          position: relative;
          bottom: 5px;
        }

        .bar {
          display: inline-block;
          height: 6px;
          border-radius: 10%;
          background-color: ${styles.primaryColor};
        }
      `}</style>
    </button>
  )
}

export default HamburgerIcon