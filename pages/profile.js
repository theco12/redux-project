import AppLayout from "../components/applayout";
import Head from "next/head";
import FollowList from "../components/profile/FollowList";
import NicknameEditForm from "../components/profile/NicknameEditForm";

const Profile = () => {
  const followerList = [
    { nickname: "김덕호" },
    { nickname: "theco" },
    { nickname: "ejzhrla" },
  ];

  const followingList = [
    { nickname: "gg" },
    { nickname: "today is next" },
    { nickname: "react is difficult" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
