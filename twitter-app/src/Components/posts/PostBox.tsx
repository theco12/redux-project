import AuthContext from "context/AuthContext";
import { PostProps } from "pages/home";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PostBoxProps {
  post: PostProps;
}

export default function PostBox({ post }: PostBoxProps) {
  const { user } = useContext(AuthContext);
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="post__box" key={post?.uid}>
      <Link to={`/posts/${post?.id}`}>
        <div className="post__box-profile">
          <div className="post__flex">
            {post?.profileImage ? (
              <img src={post?.profileImage} alt="profile" className="post__box-profile-img" />
            ) : (
              <BiSolidUserCircle className="post__box-profile-icon" />
            )}
            <div className="post__email">{post?.email}</div>
            <div className="post__createdAt">{post?.createdAt}</div>
          </div>
          <div className="post__box-content">{post?.content}</div>
        </div>
      </Link>
      <div className="post__box-footer">
        <>
          {post.uid === user?.uid && (
            <>
              <button type="button" className="post__delete" onClick={handleDelete}>
                Delete
              </button>
              <button type="button" className="post__edit">
                <Link to={`/posts/edit/${post?.uid}`}>Edit</Link>
              </button>
            </>
          )}
          <button type="button" className="post__likes" onClick={handleDelete}>
            <AiFillHeart className="post__heart" />
            {post?.likesCount || 0}
          </button>
          <button type="button" className="post__comments" onClick={handleDelete}>
            <FaRegComment className="post__comment" />
            {post?.comments ? post?.comments?.length : 0}
          </button>
        </>
      </div>
    </div>
  );
}
