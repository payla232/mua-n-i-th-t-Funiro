import Products from "../Products";

function Categories() {
    return (
        <>
            <div className="main main_content">
                <div className="categories">
                    <ul>
                        <li>
                            <h4 className="title">Categories</h4>
                        </li>
                        <li>Cafe Chair</li>
                        <li>Sofa</li>
                        <li>Lamp</li>
                        <li>Carpet</li>
                        <li>Cabinet</li>
                        <li>Tea table</li>
                    </ul>
                </div>
                <div className="article">
                    <div className="items">
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                        <Products></Products>
                    </div>
                    <div className="box_product">
                        <button className="box">1</button>
                        <button className="box">2</button>
                        <button className="box">3</button>
                        <button className="box">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
