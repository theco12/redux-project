import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostPage from "pages/posts";
import PostNewPage from "pages/posts/new";
import PostEditPage from "pages/posts/edit";
import PostDetailPage from "pages/posts/detail";
import Notification from "pages/notification";
import Search from "pages/search";
import ProfilePage from "pages/profile";
import ProfileEditPage from "pages/profile/edit";
import LoginPage from "pages/users/login";
import SignUpPage from "pages/users/signup";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/posts/new" element={<PostNewPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/posts/edit/:id" element={<PostEditPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate replace to="/users/login" />} />
        </>
      )}
    </Routes>
  );
}
