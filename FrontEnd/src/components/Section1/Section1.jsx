import React from 'react'
import './Section1.css'
const Section1 = () => {
  return (
    <section className='section1'>
        <div className="container">
            <h2>Featured Category</h2>
            <div className="sect1Bottom">
                <div className="sect1Cats">
                    <div className="sect1Cat1">
                        <div className='sect1Text'>
                            <span>Premium Quality</span>
                            <h3>Latest foam Sofa</h3>
                            <a className='auu' href="#">Latest foam Sofa EXPLORE NOW <i class="fa-solid fa-caret-right"></i></a>
                        </div>
                        <img src="https://aranoz.live/img/feature/feature_1.png" alt="" />
                    </div>
                    <div className="sect1Cat2">
                        <div className='sect1Text'>
                                <span>Premium Quality</span>
                                <h3>Latest foam Sofa</h3>
                                <a className='auu' href="#">Latest foam Sofa EXPLORE NOW <i class="fa-solid fa-caret-right"></i></a>
                            </div>
                            <img src="https://aranoz.live/img/feature/feature_2.png" alt="" />
                    </div>
                </div>
                <div className="sect1Cats">
                    <div style={{flexDirection:"column"}} className="sect1Cat2">
                        <div className='sect1Text'>
                                <span>Premium Quality</span>
                                <h3>Latest foam Sofa</h3>
                                <a className='auu' href="#">Latest foam Sofa EXPLORE NOW <i class="fa-solid fa-caret-right"></i></a>
                            </div>
                            <img src="https://aranoz.live/img/feature/feature_3.png" alt="" />
                    </div>
                    <div style={{flexDirection:"column"}} className="sect1Cat1">
                        <div  className='sect1Text'>
                            <span>Premium Quality</span>
                            <h3>Latest foam Sofa</h3>
                            <a className='auu' href="#">Latest foam Sofa EXPLORE NOW <i class="fa-solid fa-caret-right"></i></a>
                        </div>
                        <img src="https://aranoz.live/img/feature/feature_4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1
