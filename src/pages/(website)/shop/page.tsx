import React from "react";
import Categories from "../../../components/shop/categories";
import Flew from "../../../components/home/Flew";

const Shop = () => {
    return (
        <>
            <div>
                <img
                    src="https://picsum.photos/id/1/1440/600"
                    alt=""
                    className="w-full"
                />
            </div>
            <Categories></Categories>
            <Flew></Flew>
        </>
    );
};

export default Shop;
