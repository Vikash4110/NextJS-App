const SingleProfileId = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <>
      <h1>
        Username - {user.usernames} , Id - {user.postid}
      </h1>
    </>
  );
};

export default SingleProfileId;
