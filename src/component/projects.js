import React, {useState} from "react";
import "./projects.css";
import clsx from "clsx";

export default function Projects(props) {
  const { inView, sanity, URL } = props;
  const [transitionOut, setTransitionOut] = useState(false)

  //animation trigger value
  const animationTrigger = inView ? "card" : "hide";
  
  const handlePostClick = (e) => {
    console.log(e);
  }

  console.log(sanity);

  return (
    <>
      <div className={clsx("flex-center full-size", transitionOut ? `transition` : ``)}>
        <section className="animated-grid flex-center">
          {sanity.length > 0 ? (
            sanity
              .slice(0, 11)
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
                    <div className="title-container" onClick={() => handlePostClick(post)}>
                      <div className="post-author">
                        <div className="author-name">test test</div>
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
    </>
  );
}

//style={{backgroundImage: `url(https://cdn.sanity.io/images/s4fylfy4/production/${post.mainImage._ref.subtring(5)})`}}
