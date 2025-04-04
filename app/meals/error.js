'use client';

function Error({ error }) {
  // console.log(error);

  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}, please try again later.</p>
    </main>
  );
}

export default Error;
