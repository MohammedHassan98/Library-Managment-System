import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footerSection">
                <div className="row">
                    <div className="col-3">
                        <h4>Library</h4>
                    </div>

                    <div className="col-6">
                        <ul>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="col-3" style={{'padding': '10px'}}>
                        #Library
                    </div>
                </div>
            </div>
        </footer>
    )
}
