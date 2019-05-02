import React from 'react'

const Footer = () => (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 copyright">
                        <p>
                            Copyright &copy; 2019 Adrian Pardo
                        </p>
                    </div>
                    <div className="col-sm-2 top">
                        <span id="to-top">
                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="col-sm-3 social">
                        <ul>
                            <li>
                                <a href="https://github.com/apardo04" target="_blank" rel="noopener"><i className="fa fa-github" aria-hidden="true"></i><span className="hidden">Github Link</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/apardo04/" target="_blank" rel="noopener"><i className="fa fa-linkedin" aria-hidden="true"></i><span className="hidden">LinkedIn Link</span></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/apardo04" target="_blank" rel="noopener"><i className="fa fa-twitter" aria-hidden="true"></i><span className="hidden">Twitter Link</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*  End footer */}
        </footer>
        
)

export default Footer