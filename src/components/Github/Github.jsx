import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/asifkhan0")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return (
      <div className="text-center m-4 bg-green-600 text-white p-4 text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-center m-4 bg-green-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
};

export default Github;
