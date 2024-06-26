import React from 'react'
import './Contact.scss'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";


const Contact = () => {
    return (
        <div className="whole">
            <p>
                Contact us:
                <br />
                URL: us.shein.com
                <br />
                Facebook: www.facebook.com/sheinus/
                <br />
                Instagram: www.instagram.com/shein_us/
                <br />
                Email: dispute@shein.com
            </p>
            <div className="contact">
                <div className="wrapper">
                    <span>BE IN TOUCH WITH US:</span>
                    <div className="mail">
                        <input type="text" placeholder='Enter you e-mail' />
                        <button>JOIN US</button>
                    </div>

                    <div className="icons">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <GoogleIcon />
                        <PinterestIcon />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact
