const BlogImage = props => {
    return(
        <a href={props.image} target="new">
            <img src={props.image} className="yellow-border-image" />
        </a>
    )
}

export default BlogImage;