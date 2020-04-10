import React from "react";
import { useAuth0 } from "../utilhooks/useAuth";
import Loading from "./Loading"

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>
  }

  return (
    <div className="stories-page">
      <img className ="align-center profile-image" src={user.picture} alt="Profile" />
      <h2 className="align-center">{user.name}</h2>
      <p className="align-center">{user.email}</p>
    </div>
  );
};

export default Profile;
