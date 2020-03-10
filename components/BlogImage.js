const BlogImage = props => {
    let imgUrl = `../../assets/images/${props.identifier}/${props.image}.png`
    return(
        <div>
            <a href={imgUrl} target="new">
                <img src={imgUrl} className="yellow-border-image" alt={props.identifier} />
            </a>
        </div>
    )
}

export default BlogImage;