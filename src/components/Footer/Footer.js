import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import "./footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join us to receive our best posts!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"></input>
                        <Button styleBtn="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Emy</h2>
                        <Link to="/sign-up">Let's do this</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/posts">Posts</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to=""><i className="fa fa-phone" style={{ marginLeft: '10px' }}>  123456789</i></Link>
                        <Link to=""> <i className="fa fa-envelope-open-text" style={{ marginLeft: '10px' }}> </i>  email@email.com</Link>
                        <Link to=""> <i className="fa fa-facebook" style={{ marginLeft: '10px' }}> </i>  React JS</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">

                    <small className="website-rights">Emy © 2021</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to=""
                            target="_blank"
                            aria-label="Facebook"
                        > <i className="fa fa-facebook"> </i>
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to=""
                            target="_blank"
                            aria-label="Facebook"
                        > <i className="fa fa-instagram"> </i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
