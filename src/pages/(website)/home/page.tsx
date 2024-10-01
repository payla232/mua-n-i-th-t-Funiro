import React from "react";
import NewProduct from "../../../components/home/New product";
import Gallery from "../../../components/home/Gallery";
import News from "../../../components/home/News";
import Flew from "../../../components/home/Flew";

const HomePage = () => {
    return (
        <>
            <div>
                <img
                    src="https://picsum.photos/id/1/1440/600"
                    alt=""
                    className="w-full"
                />
            </div>
            <NewProduct></NewProduct>
            <Gallery></Gallery>
            <News></News>
            <Flew></Flew>
        </>
    );
};

export default HomePage;
