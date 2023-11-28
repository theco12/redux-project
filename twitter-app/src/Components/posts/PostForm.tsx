import { FiImage } from "react-icons/fi";
import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "firebaseApp";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";

export default function PostForm() {
  const [content, setContent] = useState<string>("");
  const { user } = useContext(AuthContext);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        content: content,
        createdAt: new Date()?.toLocaleString("ko", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        uid: user?.uid,
        email: user?.email,
      });
      setContent("");
      toast.success("게시글이 작성되었습니다.");
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
        <input type="submit" value="Tweet" className="post-form__submit-btn" />
      </div>
    </form>
  );
}
