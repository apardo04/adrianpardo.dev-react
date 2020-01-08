import React from 'react'

function scrollToTop() {
    window.scroll(0, 0);
}

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-5 copyright">
                    <p>
                        Copyright &copy; 2020 Adrian Pardo
                    </p>
                </div>
                <div className="col-sm-2 top">
                    <span id="to-top" onClick={scrollToTop}>
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
        <style jsx>{`
            footer {
                padding: 50px 0;
            }
            .copyright {
                padding-top: 20px;
            }
            .copyright p {
                margin: 0;
                color: var(--blue);
            }
            .top {
                text-align: center;
            }
            .top span {
                cursor: pointer;
                display: block;
                margin: 15px auto 0 auto;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                border: 3px solid var(--blue);
                text-align: center;
            }
            .top i {
                color: #a9b0b3;
            }
            .social {
                text-align: right;
                font-size: 23px;
            }
            .social ul {
                margin: 5px 0 0 0;
                padding: 0;
            }
            .social li {
                display: inline-block;
                font-size: 1.25em;
                list-style: none;
            }
            .social a {
                display: block;
                color: #a9b0b3;
                padding: 10px;
            }
            .social i.fa {
                color: var(--blue);
            }
            .social i.fa:hover {
                font-size: 40px;
            }
            @media only screen and (max-width: 768px) {
                footer {
                    text-align: center;
                }
                .social {
                    text-align: center;
                }
            }
        `}</style>
    </footer>     
)

export default Footer