import React from 'react';
import './Gallery.scss';
import leftFirstPic from '../img/gallery/left-part/left-part__first-pic.png';
import leftSecondPic from '../img/gallery/left-part/left-part__second-pic.png';
import leftThirdPic from '../img/gallery/left-part/left-part__third-pic.png';
import leftFourthPic from '../img/gallery/left-part/left-part__fourth-pic.png';
import centralPic from '../img/gallery/central-pic.png';
import rightFirstPic from '../img/gallery/right-part/right-part__first-pic.png';
import rightSecondPic from '../img/gallery/right-part/right-part__second-pic.png';
import rightThirdPic from '../img/gallery/right-part/right-part__third-pic.png';
import rightFourthPic from '../img/gallery/right-part/right-part__fourth-pic.png';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <p className="gallery__pre-title">Share your setup with</p>
        <h2 className="gallery__title">#FuniroFurniture</h2>
        <div className="gallery-pictures__general-wrapper">
          <div className="gallery-pictures__left-pics">
            <div className="gallery-pictures__left-pics_top">
              <div className="gallery-pictures__picture">
                <img src={leftFirstPic} alt="Gallery Picture" />
              </div>
              <div className="gallery-pictures__picture">
                <img src={leftSecondPic} alt="Gallery Picture" />
              </div>
            </div>
            <div className="gallery-pictures__left-pics_bottom">
              <div className="gallery-pictures__picture">
                <img src={leftThirdPic} alt="Gallery Picture" />
              </div>
              <div className="gallery-pictures__picture">
                <img src={leftFourthPic} alt="Gallery Picture" />
              </div>
            </div>
          </div>
          <div className="gallery-pictures__central-pic">
            <div className="gallery-pictures__picture">
              <img src={centralPic} alt="Gallery Picture" />
            </div>
          </div>
          <div className="gallery-pictures__right-pics">
            <div className="gallery-pictures__right-pics_top">
              <div className="gallery-pictures__picture">
                <img src={rightFirstPic} alt="Gallery Picture" />
              </div>
              <div className="gallery-pictures__picture">
                <img src={rightSecondPic} alt="Gallery Picture" />
              </div>
            </div>
            <div className="gallery-pictures__right-pics_bottom">
              <div className="gallery-pictures__picture">
                <img src={rightThirdPic} alt="Gallery Picture" />
              </div>
              <div className="gallery-pictures__picture">
                <img src={rightFourthPic} alt="Gallery Picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
