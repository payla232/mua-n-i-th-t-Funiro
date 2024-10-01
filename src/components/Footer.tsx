import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_main">
                <div className="footer_menu">
                    <ul className="footer_menu_cl">
                        <li>
                            <img src="../imgs/Frame 1329.png" alt="" />
                        </li>
                        <li>400 University Drive Suite 200 Coral Gables,</li>
                        <li>FL 33134 USA</li>
                    </ul>
                    <ul className="footer_menu_cl">
                        <li>
                            <h4 className="menu_title">Siteap</h4>
                        </li>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="footer_menu_cl">
                        <li>
                            <h4 className="menu_title">Help</h4>
                        </li>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="footer_menu_cl">
                        <li>
                            <h4 className="menu_title">Location</h4>
                        </li>
                        <li>support@euphoria.in</li>
                        <li>Ahmedabad Main Road</li>
                        <li>Udaipur, India- 313002</li>
                    </ul>
                </div>
                <div className="footer_cpr">
                    <p>
                        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
