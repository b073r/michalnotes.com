import React from "react"
import { Link } from "gatsby"

const PostPreview = ({title, description, image, link}) => {

    return (
        <article class="article">
            <div class="article-entry">
                <h3>{title}</h3>
                <p>{description} <Link to={link}>Read more...</Link></p>
            </div>
            <img src={image} alt={title} />
        </article>
    );
}

export default PostPreview;