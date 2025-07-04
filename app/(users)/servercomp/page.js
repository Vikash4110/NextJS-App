const serverComp = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const data = await res.json();
  return (
    <>
      <h1>This is a Server Component</h1>

      <ul className="grid grid-cols-3 gap-5">
        {data.map((curElm, index) => {
          return <li key={index}> {curElm.body}</li>;
        })}
      </ul>
    </>
  );
};

export default serverComp;
