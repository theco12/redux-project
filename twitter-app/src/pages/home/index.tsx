import PostBox from "Components/posts/PostBox";
import PostForm from "Components/posts/PostForm";

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

const post: PostProps[] = [
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
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For you</div>
        <div className="home__tab">Following</div>
      </div>

      <PostForm />

      <div className="post">
        {post.map((post) => (
          <PostBox post={post} key={post?.id} />
        ))}
      </div>
    </div>
  );
}
