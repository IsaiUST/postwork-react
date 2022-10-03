import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
    <div className="container-fluid">

        <div className="section-title">
        <h2>Some photos from <span>Our Restaurant</span></h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row g-0">

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
            <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
            </a>
            </div>
        </div>

        </div>

    </div>
    </section>
  )
}

export default Gallery