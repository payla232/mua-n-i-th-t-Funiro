import React from "react";
import ContactMain from "../../../components/contact/contact main";
import ContactAction from "../../../components/contact/contact action";

const Contact = () => {
    return (
        <>
            <div>
                <img
                    src="../../../imgs/banner contact.png"
                    alt=""
                    className="w-full"
                />
            </div>
            <ContactMain></ContactMain>
            <ContactAction></ContactAction>
        </>
    );
};

export default Contact;
