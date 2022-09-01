import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./RepoDetails.css";
export const RepoDetails = ({ props }) => {
  const dispatch = useDispatch();

  //   function moreDetails(e) {
  //     e.preventDefault();
  //   }
  return (
    <div className="repo-details-container">
      <div className="repo-owner-avtar">
        <img src={props.owner.avatar_url} alt="owner avtar " />
      </div>
      <div>
        <div className="repo-name">
          <div>
            <p>
              <span className="repo-details-bold">Repository Name:</span>{" "}
              <span>{props.name}</span>
            </p>
            <div>
              <select name="pets" id="pet-select" className="repo-details-bold">
                <option value="">Actions:</option>
                <option value="commits">Commits</option>
                <option value="actions">Actions</option>
                <option value="deletions">Deletions</option>
              </select>
            </div>
          </div>
          <p>
            <span className="repo-details-bold">Owner Name:</span>{" "}
            <span>{props.owner.login}</span>
          </p>
          <p>
            <span className="repo-details-bold">Description:</span>
            {props.description ? props.description : "Not given by owner"}
          </p>
        </div>
        <div className="repo-all-about">
          <div>
            <span className="repo-details-bold">Total Stars:</span>
            {props.stargazers_count}
          </div>
          <div
            className="more-details-button"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "moredetails", payload: { ...props } });
            }}
          >
            <Link to={`${props.name}`}>More Details</Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
