const SingleProfile = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <>
      <h1>Username - {user.usernames}</h1>
    </>
  );
};

export default SingleProfile;
