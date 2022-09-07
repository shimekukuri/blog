import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import "./projects.css";
import clsx from "clsx";

export default function Projects(props) {
  const { inView, sanity, urlParams } = props;
  const [transitionOut, setTransitionOut] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [showBlogPosts, setShowBlogPosts] = useState(false);

  //animation trigger value
  const animationTrigger = inView ? "card" : "hide";

  //functions for handeling animation of selecting blog posts

  const handlePostClick = (e) => {
    setTransitionOut(prev => !prev);
    setSelectedPost(e);
    if(urlParams) {
      window.location.replace(`http://localhost:3000`)
    }
  };

  const handleShowBlogPosts = () => {
    setShowBlogPosts((prev) => !prev);
  };

  
  useEffect(() => {
    if (transitionOut) {
      const plogPostTimer = setTimeout(handleShowBlogPosts, 1000);
      
      return () => {
        clearTimeout(plogPostTimer);
      };
    } else if (!transitionOut) {
      handleShowBlogPosts();
    }
  }, [selectedPost]);
  
  //if Url Params exist than set them to selectedPost
  useEffect(() => {
    if (urlParams) {
      setTransitionOut(!transitionOut);
      console.log(sanity);
      setSelectedPost( ...sanity.filter((post) => post._createdAt === urlParams));
      console.log(selectedPost);
    }
  }, [sanity]);

  return (
    <>
      {showBlogPosts && inView && (
        <BlogPost
          handlePostClick={handlePostClick}
          selectedPost={selectedPost}
        />
      )}
      {!showBlogPosts && (
        <div
          className={clsx(
            "flex-center full-size",
            transitionOut ? `transition` : ``
          )}
        >
          <section className="animated-grid flex-center">
            {sanity.length > 0 ? (
              sanity
                .slice(0, 9)
                .sort((a, b) => {
                  return new Date(b._createdAt) - new Date(a._createdAt);
                })
                .map((post, i) => {
                  return (
                    <div
                      key={post._createdAt}
                      className={animationTrigger}
                      style={{
                        backgroundImage: `url(https://cdn.sanity.io/images/s4fylfy4/production/${post?.mainImage?.asset?._ref.substring(
                          6,
                          post?.mainImage?.asset?._ref.length - 4
                        )}.${post?.mainImage?.asset?._ref.slice(-3)}`,
                      }}
                    >
                      <div
                        className="title-container"
                        onClick={() => handlePostClick(post)}
                      >
                        <div className="post-author">
                          <div className="author-name">James Hutchinson</div>
                        </div>
                        <div className="title-card">
                          <div className="title-card-content">
                            <div className="post-title">{post.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            ) : (
              <h1>trouble fetching blog</h1>
            )}
          </section>
        </div>
      )}
    </>
  );
}
