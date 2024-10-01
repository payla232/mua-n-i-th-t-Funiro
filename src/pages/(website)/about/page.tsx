import React from "react";
import Introduce from "../../../components/about/introduce";
import Blog from "../../../components/about/blog";
import BlogSub from "../../../components/about/blog sub";

const About = () => {
    return (
        <>
            <div>
                <img
                    src="../../../imgs/banner_introduce.png"
                    alt=""
                    className="w-full"
                />
            </div>
            <Introduce></Introduce>
            <Blog></Blog>
            <BlogSub></BlogSub>
        </>
    );
};

export default About;
