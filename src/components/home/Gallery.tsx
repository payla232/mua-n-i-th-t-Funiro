function Gallery() {
    return (
        <div className="main main_top">
            <div className="view">
                <h2 className="title">Gallery</h2>
                <span className="title_more">
                    <a href="#!" className="btn_more">
                        {" "}
                        View all gallery{" "}
                    </a>
                </span>
            </div>
            <div className="gallery_list">
                <div className="gallery_img">
                    <img src="../imgs/gallery 1.png" alt="gallery_img" />
                </div>
                <div className="gallery_img">
                    <img src="../imgs/gallery 2.png" alt="gallery_img" />
                </div>
                <div className="gallery_img">
                    <img src="../imgs/gallery 3.png" alt="gallery_img" />
                </div>
                <div className="gallery_img">
                    <img src="../imgs/gallery 4.png" alt="gallery_img" />
                </div>
                <div className="gallery_img">
                    <img src="../imgs/gallery 5.png" alt="gallery_img" />
                </div>
                <div className="gallery_img">
                    <img src="../imgs/gallery 6.png" alt="gallery_img" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
