import React from "react";
import Router from "Components/Router";
import Layout from "Components/Layout";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";

function App() {
  const auth = getAuth(app);
  console.log(auth);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
