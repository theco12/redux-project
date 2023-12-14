import { FiImage } from "react-icons/fi";
import { useCallback, useContext, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { PostProps } from "pages/home";
import AuthContext from "context/AuthContext";

export default function PostEditForm() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState<string>("");
  const [post, setPost] = useState<PostProps | null>(null);

  const getPost = useCallback(async () => {
    if (params.id) {
      const docRef = doc(db, "postData", params.id);
      const docSnap = await getDoc(docRef);

      console.log(docSnap?.data());

      setPost({ ...(docSnap?.data() as PostProps), id: docSnap.id });
      setContent(docSnap?.data()?.content);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      getPost();
    }
  }, [getPost, params.id]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (post) {
        const postRef = doc(db, "postData", post.id);
        await updateDoc(postRef, {
          content: content,
        });
        navigate(`/posts/${post.id}}`);
        toast.success("게시글이 수정되었습니다.");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const onchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "content") setContent(value);
  };

  return (
    <form className="post-form" onSubmit={onSubmit}>
      <textarea
        name="content"
        required
        id="content"
        className="post-form"
        placeholder="what is happening"
        onChange={onchange}
        value={content}></textarea>

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
        <input type="submit" value="수정" className="post-form__submit-btn" />
      </div>
    </form>
  );
}
