const SeeMore = props => {
    return (
        <div className="see-more" id="lead-see-more">
            <span>
                <a href={props.href} className="see-more-arrows">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <span className="hidden">Jump to next section</span>
                </a>
            </span>
            <style jsx>{`
                @keyframes opac {
                    from {opacity: .4;}
                    to {opacity: 1;}
                }
                .see-more {
                    position: relative;
                    width: 100%;
                    font-size: 4.5em;
                    z-index: 10;
                    top: 85%;
                }
                .see-more span {
                    cursor: pointer;
                    display: block;
                    margin: 0 auto;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    text-align: center;
                }
                .see-more-arrows {
                    left: 4rem;
                    bottom: 4rem;
                }
                .see-more-arrows .fa {
                    color: var(--yellow);
                    display: block;
                    line-height: .2;
                    animation-name: opac;
                    animation-duration: 1.2s;
                    animation-timing-function: linear;
                    animation-delay: 0s;
                    animation-iteration-count: infinite;
                    animation-direction: normal;
                    animation-fill-mode: none;
                    animation-play-state: running;
                }
                .see-more-arrows .fa:nth-child(2) {
                    animation-delay: 0.4s;
                }
                .see-more-arrows .fa:nth-child(3) {
                    animation-delay: 0.8s;
                }
                .see-more-arrows:hover {
                    text-decoration: none;
                }
                .see-more-arrows:hover .fa, .see-more-arrows:active .fa, .see-more-arrows:focus .fa {
                    -webkit-animation: none;
                    animation: none;
                }
                @media only screen and (max-width: 992px) {
                    .see-more {
                        top: 50%;
                    }
                }
            `}</style>
        </div>
        
    )
}


export default SeeMore