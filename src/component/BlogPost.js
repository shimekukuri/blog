import React from "react";
import "./BlogPost.css";
import ArrowSvg from "./Arrow";
import { PortableText } from "@portabletext/react";

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
              <div className="background-blur">
                <div className="fill-box">
                  <div>
                    <h1 className="selected-post-title">
                      {selectedPost.title}
                    </h1>
                  </div>
                  <h1 className="flex-end selected-post-author">
                    Written by: James Tyler Hutchinson
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-body">
              <PortableText value={selectedPost.body} />
            </div>
          </div>
        </div>
      </div>
      <ArrowSvg className="go-back-button" onClick={handlePostClick} />
    </>
  );
}
