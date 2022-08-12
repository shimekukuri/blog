import React from "react";
import "./BlogPost.css";
import ArrowSvg from "./Arrow";

export default function BlogPost(props) {
  const { selectedPost, handlePostClick } = props;
  console.log(selectedPost);

  return (
    <>
      {
        //<button className="go-back-button" onClick={handlePostClick}>GO BACK</button>
      }
      <div className="blog-flex-container">
        <div className="post-container">
          <div className="flex-post">
            <div
              className="inner-post-title"
              style={{
                backgroundImage: `url(https://cdn.sanity.io/images/s4fylfy4/production/${selectedPost?.mainImage?.asset?._ref.substring(
                  6,
                  selectedPost?.mainImage?.asset?._ref.length - 4
                )}.${selectedPost?.mainImage?.asset?._ref.slice(-3)}`,
              }}
            >
              <div className="background-blur"><div><h1 className="selected-post-title">test</h1></div></div>
            </div>
            <div>Proper overflow</div>
          </div>
        </div>
      </div>
      <ArrowSvg className="go-back-button" onClick={handlePostClick} />
    </>
  );
}
