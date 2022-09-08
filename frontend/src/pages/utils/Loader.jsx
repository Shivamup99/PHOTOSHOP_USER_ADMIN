import React from 'react'
import './loader.scss'
const Loader = () => {
  return (
   <div className="loader">
  <div className="loader-inner">
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
  </div>
</div>
  )
}

export default Loader