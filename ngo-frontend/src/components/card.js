import React from "react";
import Link from "next/link";
import NextImage from "./strappiImage";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="title" className="uk-text-large" style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap', /* Don't forget this one */
              textOverflow: 'ellipsis',
              fontSize: 16,
              fontWeight:'bold'
            }}>
              {article.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;