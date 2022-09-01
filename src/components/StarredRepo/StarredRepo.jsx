import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RepoDetails } from "./RepoDetails";
import "./StarredRepo.css";
export const StarredRepo = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const starredRepo = useSelector((store) => {
    return store.starredRepo;
  });

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
      )
      .then((res) => {
        console.log(res);
        return dispatch({ type: "addStarredRepo", payload: res.data.items });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        console.log("always run store");
      });
  }, [page]);
  return (
    <div>
      <h2>Most Starred Repo</h2>
      {console.log(starredRepo.length)}
      {starredRepo.length > 0 ? (
        <div>
          {starredRepo.map((el) => {
            return <RepoDetails props={el} />;
          })}
        </div>
      ) : (
        <span>Loading....</span>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage((page) => {
            return page - 1;
          });
        }}
      >
        PREVIOUS
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage((page) => {
            return page + 1;
          });
        }}
      >
        Next page
      </button>
    </div>
  );
};
