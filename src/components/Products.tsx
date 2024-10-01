function Products() {
    return (
        <>
            <div className="product">
                <div className="product_img">
                    <img src="../imgs/new product 1.png" alt="" />
                </div>
                <div className="product_title">
                    <h3 className="product_name clip_text">Syltherine</h3>
                    <p className="product_sub clip_text">Stylish cafe chair</p>
                    <span className="product_price">2.500.000đ</span>
                    <div className="btn_action">
                        <a href="#!" className="btn_add">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
