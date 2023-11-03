import { FiImage } from "react-icons/fi";

export default function PostForm() {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file);
  };

  return (
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
  );
}
