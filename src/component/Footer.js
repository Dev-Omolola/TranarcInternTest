import React from 'react';
import './Footer.css'
import Link from 'antd/es/typography/Link';

const Footer = (props) => {
    return (
        <div>
            <footer>
                <div>
                    <img src="https://download.logo.wine/logo/Google_Play/Google_Play-Logo.wine.png" alt=""/>
                </div>
                <ul>
                    <h5>Links</h5>
                    <Link href="">
                        <li>Sabishare</li>
                    </Link>
                    <Link href="">
                        <li>Torizone</li>
                    </Link>
                    <Link href="">
                        <li>Pitakwa360</li>
                    </Link>
                </ul>
                <ul>
                    <h5>Social Media</h5>
                    <Link href="">
                        <li>Facebook</li>
                    </Link>
                    <Link href="">
                        <li>Twitter</li>
                    </Link>
                    <Link href="">
                        <li>Instagram</li>
                    </Link>
                    <Link href="">
                        <li>Telegram</li>
                    </Link>
                </ul>
                <ul>
                    <h5>
                        Resources
                    </h5>
                    <Link href="">
                        <li>Login</li>
                    </Link>
                    <Link href="">
                        <li>Sign Up</li>
                    </Link>
                    <Link href="">
                        <li>Contact Us</li>
                    </Link>
                    <Link href="">
                        <li>Advertise</li>
                    </Link>
                    <Link href="">
                        <li>Privacy Policy</li>
                    </Link>
                    <Link href="">
                        <li>DMCA Takedown</li>
                    </Link>
                </ul>





            </footer>
        </div>
    )
}

export default Footer