function ContactAction() {
    return (
        <div className="contact_action">
            <div className="img">
                <img src="../../../imgs/contact_img.png" alt="" />
            </div>
            <div className="title">
                <div className="contact_form">
                    <h4 className="title_sub">CONTACT</h4>
                    <h2 className="title_main">CONNECT WITH US NOW</h2>
                    <form className="form">
                        <div className="row">
                            <div className="column">
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="column">
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="column">
                                <input type="text" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="column_row">
                            <input type="text" placeholder="Message" />
                        </div>
                        <div className="btn_form">
                            <img src="../../../imgs/btn_form.png" alt="" />
                            <p className="letter">Send Infomation</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactAction;
