import React, { useState, useEffect, useReducer } from "react";
import BlogPost from "./BlogPost";
import "./projects.css";
import clsx from "clsx";

const ACTIONS = {
  BLOGPOSTSELECT: "blogpostselect",
  BLOGPOST_DESELECT: "blogpostunselect",
  URL_PARAM_PRESENT: "urlparamsPresent",
};

const initialState = {
  postState: {
    showAllPosts: true,
    showSelectedPost: false,
  },
  selectedPost: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.BLOGPOSTSELECT: {
      return {
        ...state,
        postState: {
          ...state.postState,
          showSelectedPost: true,
          showAllPosts: false,
        },
        selectedPost: action.payload,
      };
    }
    case ACTIONS.BLOGPOST_DESELECT: {
      return {
        ...state,
        postState: {
          ...state.postState,
          showSelectedPost: false,
          showAllPosts: true,
        },
        selectedPost: false,
      };
    }
    case ACTIONS.URL_PARAM_PRESENT: {
      return {
        ...state,
        postState: {
          ...state.postState,
          showSelectedPost: true,
          showAllPosts: false,
        },
        selectedPost: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default function Projects(props) {
  const [states, dispatch] = useReducer(reducer, initialState);
  const { inView, sanity, urlParams } = props;
  const [transitionOut, setTransitionOut] = useState(false);

  //animation trigger value
  const animationTrigger = inView ? "card" : "hide";

  //functions for handeling animation of selecting blog posts

  const handlePostClick = (post) => {
    setTransitionOut((prev) => !prev);
    setTimeout(() => {
      dispatch({ type: ACTIONS.BLOGPOSTSELECT, payload: post });
    }, 1000);
  };

  const handleShowBlogPosts = () => {
    setTransitionOut((prev) => !prev);
    dispatch({ type: ACTIONS.BLOGPOST_DESELECT });
    if (urlParams) {
      window.location.replace(`${process.env.REACT_APP_HOST}`);
    }
  };

  //if Url Params exist than set them to selectedPost
  useEffect(() => {
    if (urlParams) {
      setTransitionOut(!transitionOut);
      let urlPost = sanity.filter((post) => post._createdAt === urlParams);
      dispatch({type: ACTIONS.URL_PARAM_PRESENT, payload: urlPost[0]})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sanity]);

  return (
    <>
      {states.postState.showSelectedPost && (
        <BlogPost
          handleShowBlogPosts={handleShowBlogPosts}
          handlePostClick={handlePostClick}
          selectedPost={states.selectedPost}
        />
      )}
      {states.postState.showAllPosts && (
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
