import './Footer.css'
import AppLogo from '../../../assets/images/app-logo.jpg'

export const Footer = () => {
    return (
        <>
            <div className="section" style={{backgroundColor: "#5a7d7c", color:"white"}}>
                <div className="container">
                    <div className="footer-grid"><img
                        src={AppLogo} width={100} height={64}
                        loading="lazy" id="w-node-_116c6020-8c66-bb25-2d61-fa18863f53c0-863f538d" alt=""
                        className="footer-logotype"/>
                        <div id="w-node-_116c6020-8c66-bb25-2d61-fa18863f5390-863f538d" className="footer-content-wrap">
                            <div className="text-small-caps text-secondary">Pages</div>
                            <div className="footer-link-wrap"><a href="/" className="footer-link">Home</a></div>
                            <div className="footer-link-wrap"><a href="/shop" className="footer-link">About us</a></div>
                            <div className="footer-link-wrap"><a href="/categories"
                                                                 className="footer-link">Airport Booking</a></div>
                            <div className="footer-link-wrap"><a href="/buyers-guides" className="footer-link">Guides</a></div>

                        </div>
                        <div id="w-node-_3441dbb6-1ca6-1843-9978-dcfd63cf29fe-863f538d" className="footer-content-wrap">
                            <div className="text-small-caps text-secondary">Gear categories</div>
                            <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <div className="footer-link-wrap"><a href="/category/hiking-boots"
                                                                             className="footer-link">Hiking Gear</a>
                                        </div>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <div className="footer-link-wrap"><a href="/category/climbing-gear"
                                                                             className="footer-link">Climbing Gear</a>
                                        </div>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <div className="footer-link-wrap"><a href="/category/jackets"
                                                                             className="footer-link">Jackets</a></div>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <div className="footer-link-wrap"><a href="/category/accessories"
                                                                             className="footer-link">Accessories</a>
                                        </div>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <div className="footer-link-wrap"><a href="/category/apparel"
                                                                             className="footer-link">Apparel</a></div>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <div className="footer-link-wrap"><a href="/category/headwear"
                                                                             className="footer-link">Headwear</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_7d2061bd-7452-ee80-c151-b37349c45d27-863f538d" className="footer-content-wrap">
                            <div className="text-small-caps text-secondary">Company</div>
                            <div className="footer-link-wrap"><a href="/about-us" aria-current="page"
                                                                 className="footer-link w--current">About us</a></div>
                            <div className="footer-link-wrap"><a href="/our-team" className="footer-link">Our team</a>
                            </div>
                            <div className="footer-link-wrap"><a href="/contact" className="footer-link">Contact</a>
                            </div>
                            <div className="footer-link-wrap"><a href="/terms-and-conditions"
                                                                 className="footer-link">Terms &amp;&nbsp;Conditions</a>
                            </div>
                            <div className="footer-link-wrap"><a href="/style-guide" className="footer-link">Style
                                guide</a></div>
                            <div className="footer-link-wrap"><a href="/licenses" className="footer-link">Licenses</a>
                            </div>
                        </div>
                        <div id="w-node-_116c6020-8c66-bb25-2d61-fa18863f53af-863f538d" className="footer-content-wrap">
                            <div className="text-small-caps text-secondary">Newsletter</div>
                            <p className="text-neutral-5">Subscribe to our (infrequent) newsletter where we share news
                                about upcoming listings and projects.</p>
                            <div className="form-block w-form">
                                <form id="newsletter-form" name="wf-form-Newsletter-form" data-name="Newsletter form"
                                      method="get">
                                    <div className="footer-form"><input type="email"
                                                                        className="single-item-form-text-field w-input"
                                                                        name="Email-Subscription"
                                                                        data-name="Email Subscription"
                                                                        placeholder="example@webflow.io"
                                                                        id="Email-Subscription" />
                                        <input
                                        type="submit" value="Submit" data-wait="Please wait..."
                                        className="form-button small single-item-form-button w-button"/>
                                    </div>
                                </form>
                                <div className="success-message w-form-done">
                                    <div>Thanks for signing up!</div>
                                </div>
                                <div className="error-message w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_116c6020-8c66-bb25-2d61-fa18863f53bf-863f538d" className="footer-content-wrap">
                            <p className="footer-rights-text">© Memoravel Travel, LLC. All rights reserved.</p>
                        </div>
                        <div id="w-node-aa572806-cbda-1287-d538-05e9b5cfefd5-863f538d" className="footer-content-wrap">
                            <div className="social-icons-wrap space-top"><a
                                href="https://webflow.com/templates/designers/gkdc" target="_blank"
                                className="social-icon-wrap w-inline-block"><img
                                src="https://assets.website-files.com/611e0980838f625301db13a6/611e0980838f62a9b1db13fe_Linkedin%20Icon.svg"
                                loading="lazy" alt="" className="social-icon"/></a><a
                                href="https://webflow.com/templates/designers/gkdc" target="_blank"
                                className="social-icon-wrap w-inline-block"><img
                                src="https://assets.website-files.com/611e0980838f625301db13a6/611e0980838f623225db1400_Facebook%20Icon.svg"
                                loading="lazy" alt="" className="social-icon"/></a><a
                                href="https://webflow.com/templates/designers/gkdc" target="_blank"
                                className="social-icon-wrap w-inline-block"><img
                                src="https://assets.website-files.com/611e0980838f625301db13a6/611e0980838f62dba0db13ff_Instagram%20Icon.svg"
                                loading="lazy" alt="" className="social-icon"/></a><a
                                href="https://webflow.com/templates/designers/gkdc" target="_blank"
                                className="social-icon-wrap last w-inline-block"><img
                                src="https://assets.website-files.com/611e0980838f625301db13a6/611e0980838f62f209db13fd_Twitter%20Icon.svg"
                                loading="lazy" alt="" className="social-icon"/></a></div>
                        </div></div>
                </div>
            </div>
        </>
    )
}