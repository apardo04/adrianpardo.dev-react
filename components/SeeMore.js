class SeeMore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {visible: false}
    }
    render() {
        const { visible } = this.state;
        return (
            <div className="see-more" id="lead-see-more">
                <span>
                    <a href={this.props.href} className="see-more-arrows">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <span className="hidden">Jump to next section</span>
                    </a>
                </span>
            </div>
        )
    }
}

export default SeeMore