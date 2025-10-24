import "../styles/post.css";

type PostProps = {
  title: string;
  body: string;
  photoUrl?: string;
};

function Post({ title, body, photoUrl }: PostProps) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={photoUrl} alt="Profile photo" className="profile-photo" />
        <h3>{title}</h3>
      </div>
      <p>{body}</p>
    </div>
  );
}

export default Post;
