import React from 'react';
import PostCards from "../PostCards/PostCards";
import Loading from "../../../shared/Loading/Loading";
//import'./PostDiv.css';

const PostDiv = (props)=>{
  if (!props.posts || (props.posts && props.posts.length === 0)) {
    return (
      <div className="col-11 MainPosts">
        <div className="row">
          <div className="col-12 Center">
            <h2>Global Posts</h2>
            <hr />
          </div>
          <div className="col-12 p-4">
            <div className="row Center">
              <Loading />
            </div>
          </div>
        </div>
      </div>
    );
  }
    return (
      <div className="col-11 MainPosts">
        <div className="row">
          <div className="col-12 Center">
            <h2>Global Posts</h2>
            <hr />
          </div>
          <div className="col-12 p-4">
            <div className="row">
              {props.posts.map((post) => (
                <div className="col-4 p-3">
                  <PostCards
                    title={post.data.title}
                    description={post.data.description}
                    content={post.data.content}
                    url={post.data.file}
                    createdAt={post.createdAt
                      .toDate()
                      .toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}

                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default PostDiv ;