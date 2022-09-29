import { useState } from "react";

const NewsFeed = (props) => {
  const { user } = props;

  const [postArea, setPostArea] = useState("");

  const [listedPosts, setListedPosts] = useState([]);

  const onPost = () => {
    setListedPosts([
      ...listedPosts,
      { id: listedPosts.length, content: postArea },
    ]);
    setPostArea("");
  };

  const onDeletePost = (postIdToDelete) => () => {
    setListedPosts(listedPosts.filter((post) => post.id !== postIdToDelete));
  };

  return (
    <div>
      <div>
        <textarea
          value={postArea}
          onChange={(event) => setPostArea(event.target.value)}
        />
      </div>
      <div>
        <button onClick={onPost}>Post</button>
      </div>
      <div>
        {listedPosts.map((post, index) => (
          <div key={index}>
            <div>{user.userName}</div>
            <div>
              <img
                src={user.profilePhotoUrl}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </div>
            <div>{post.content}</div>
            <button onClick={onDeletePost(post.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
