const BlogImage = props => {
    return(
        <p>
            <a href={props.image} target="new">
                <img src={"../../assets/images/" + props.identifier +"/" + props.image + ".png"} className="yellow-border-image" alt={props.identifier} />
            </a>
        </p>
    )
}

export default BlogImage;