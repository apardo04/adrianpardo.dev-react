const BlogImage = props => {
    return(
        <p>
            <a href={props.image} target="new">
                <img src={props.image} className="yellow-border-image" />
            </a>
        </p>
    )
}

export default BlogImage;