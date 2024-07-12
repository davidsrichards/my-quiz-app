import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => state);
  console.log(state);
  return <></>;
}

export default Profile;
