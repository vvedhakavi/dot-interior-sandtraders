import React from 'react'
import gallery_img_1 from '../assets/dot-interiors-and-traders-gallery-sec-17.png'
import gallery_img_2 from '../assets/gallery-sec-2.png'
import gallery_img_3 from '../assets/dot-interiors-and-traders-gallery-sec-16.png'
import gallery_img_4 from '../assets/dot-interiors-and-traders-gallery-sec-15.png'
import gallery_img_5 from '../assets/dot-interiors-and-traders-gallery-sec-18.png'
import gallery_img_6 from '../assets/gallery-sec-6.png'
import gallery_img_8 from '../assets/gallery-sec-8.png'
import gallery_img_10 from '../assets/gallery-sec-3.png'
import gallery_img_11 from '../assets/galleryimg1.png'
import gallery_img_12 from '../assets/gallery-sec-5.png'
import gallery_img_17 from '../assets/galleryimg3.png'
import gallery_img_18 from '../assets/galleryimg2.png'
import gallery_img_13 from '../assets/gallery-sec-4.png'
import gallery_img_14 from '../assets/galleryimg4.png'
import gallery_img_15 from '../assets/galleryimg1.png'
import gallery_img_16 from '../assets/dot-interiors-and-traders-gallery-sec-14.png'





const Gallery = () => {
  return (
    <div>
       <div className="container pt-2  mb-5">
        <p className="text-center fw-bold fs-3">Gallery</p>
        <p></p>
      <div className="row g-3 py-4"> 
<div className="col-md-4">
          <img src={gallery_img_1} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
         <div className="col-md-4">
          <img src={gallery_img_3} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
         <div className="col-md-4">
          <img src={gallery_img_4} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>

        <div className="col-md-4">
          <img src={gallery_img_5} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>

        <div className="col-md-4">
          <img src={gallery_img_10} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>

        <div className="col-md-4">
          <img src={gallery_img_15} alt="" onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>

        <div className="col-md-4">
          <img src={gallery_img_16} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>

 <div className="col-md-4">
          <img src={gallery_img_8} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
 <div className="col-md-4">
          <img src={gallery_img_2} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
         <div className="col-md-4">
          <img src={gallery_img_6} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>

 <div className="col-md-4">
          <img src={gallery_img_12} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
 <div className="col-md-4">
          <img src={gallery_img_14} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
         <div className="col-md-4">
          <img src={gallery_img_13} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
         <div className="col-md-4">
          <img src={gallery_img_17} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>
         <div className="col-md-4">
          <img src={gallery_img_18} alt=""  onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100 rounded"/>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Gallery



