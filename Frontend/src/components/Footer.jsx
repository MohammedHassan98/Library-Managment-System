import React from 'react'
import Facebook from '../Assets/icons/facebook.svg'
import Instagram from '../Assets/icons/instagram-logo.svg'
import Twitter from '../Assets/icons/twitter.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footerSection">
                <div className="row">
                    <div className="col-2">
                        <h4 style={{ 'padding': '10px' }}>Library</h4>
                    </div>

                    <div className="col-4">
                        <ul>
                            <li> <a href='#' className="links" >Help Center </a></li>
                            <li> <a href='#' className="links" >Contact Us </a></li>
                            <li> <a href='#' className="links" >About Us </a></li>
                        </ul>
                    </div>
                    <div className="col-3" style={{'display': 'inline-block'}}>
                        <ul>
                            <li> <a href='#' ><img src={Facebook} alt="faceIcon" className="SocialIcon"/> </a></li>
                            <li> <a href='#' ><img src={Instagram} alt="instaIcon" className="SocialIcon" /> </a></li>
                            <li> <a href='#' ><img src={Twitter} alt="twitterIcon" className="SocialIcon" /> </a></li>
                            <li style={{marginLeft:'-10px'}}>#Library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
