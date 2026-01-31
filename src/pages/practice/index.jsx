import React from "react";
import axios from "axios";

const ApiPractice = () => {
  const handlePost = async () => {
    try {
      const params = {
        title: "My Post",
        body: "Hello World",
        userId: 1,
      };

      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        params,
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostWithHeaders = async () => {
    try {
      const params = {
        title: "My Post",
        body: "Hello World",
        userId: 1,
      };

      const headers = {
        "Content-Type": "application/json",
        "X-Custom-Header": "MyHeaderValue",
      };

      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        params,
        { headers },
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handlePut = async () => {
    try {
      const params = {
        title: "My Post",
        body: "Hello World",
        userId: 1,
      };

      const res = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        params,
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/1",
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex flex-column gap-3">
        <button className="btn btn-primary" onClick={handlePost}>
          POST with Params
        </button>
        <button className="btn btn-primary" onClick={handlePostWithHeaders}>
          POST with Params & Headers
        </button>
        <button className="btn btn-primary" onClick={handlePut}>
          PUT
        </button>
        <button className="btn btn-primary" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ApiPractice;
