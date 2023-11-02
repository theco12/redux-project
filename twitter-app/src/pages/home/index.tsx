import { FiImage } from "react-icons/fi";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileImage?: string;
  likes?: string[];
  likesCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "test",
    createdAt: "2023-01-01",
    uid: "1sdaf",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "test",
    createdAt: "2023-01-01",
    uid: "1adsf",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "test",
    createdAt: "2023-01-01",
    uid: "1eweqt",
  },
];

export default function Home() {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For you</div>
        <div className="home__tab">Following</div>
      </div>

      {/* Post Form */}
      <form className="post-form">
        <textarea
          name="content"
          required
          id="content"
          className="post-form"
          placeholder="what is happening"></textarea>
        <div className="post-form__submit-area">
          <label htmlFor="file-input" className="post__file">
            <FiImage className="post-form__file-icon" />
          </label>

          <input
            type="file"
            id="file-input"
            className="hidden"
            accept="image/*"
            onChange={handleFileUpload}
          />
          <input type="submit" value="Tweet" className="post-form__submit-btn" />
        </div>
      </form>

      {/* Tweet Post */}
      <div className="post">
        {posts.map((post) => (
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
              {/* post.uid === user.uid 일때 */}
              <>
                <button type="button" className="post__delete" onClick={handleDelete}>
                  Delete
                </button>
                <button type="button" className="post__edit">
                  <Link to={`/posts/edit/${post?.uid}`}>Edit</Link>
                </button>
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
        ))}
      </div>
    </div>
  );
}
