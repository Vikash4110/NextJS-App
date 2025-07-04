"use client";
const clientComp = () => {
  return (
    <>
      <h1>This is a Client Component</h1>
      <button
        className="bg-amber-700 p-3 text-cyan-600"
        onClick={() => {
          alert("Hello Dunia");
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default clientComp;
