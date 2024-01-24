"use client";

import React, { useState } from "react";
import {
  FaComment,
  FaHeart,
  FaLaugh,
  FaSadCry,
  FaShare,
  FaSmile,
  FaThumbsUp,
} from "react-icons/fa";

function Post() {
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <div className="card card-bordered border-base-300 flex flex-col text-justify p-3 mb-1 sm:text-sm text-base">
      <div className="card-title">
        <h2>Title</h2>
        <small>#2024</small>
        <span className=" text-right w-full ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="m-1">
              ...
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
              <li>
                <a>Report</a>
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div>Jan 18, 24</div>
      <div className=" card-body text-lg">
        Learn how to form, develop, and express your ideas in paragraphs. Find
        out what a paragraph is, how to decide what to put in it, and how to
        organize it with different techniques. See a 5-step example of how to
        write an illustration paragraph that supports your thesis with examples.
      </div>
      <div className="w-full flex flex-row pt-2">
        <span className="flex w-full justify-center">1K</span>
        <span className="flex w-full justify-center">1K</span>
        <span className="flex w-full justify-center">6</span>
      </div>
      <div className="w-full flex flex-row pt-2 text-2xl">
        <span className="flex w-full justify-center">
          <div className="dropdown dropdown-hover dropdown-top">
            <span tabIndex={0} className="hover:text-primary cursor-pointer">
              <FaThumbsUp />
            </span>
            <div className=" flex flex-row dropdown-content z-[1] menu p-2 w-96">
              <span className="text-2xl pr-3 text-warning hover:text-3xl">
                <FaSmile />
              </span>
              <span className="text-2xl pr-3 text-warning hover:text-3xl">
                <FaSadCry />
              </span>
              <span className="text-2xl pr-3 text-warning hover:text-3xl">
                <FaLaugh />
              </span>
              <span className="text-2xl pr-3 text-error hover:text-3xl">
                <FaHeart />
              </span>
            </div>
          </div>
        </span>
        <span
          className="flex w-full justify-center"
          onClick={() => setIsComment(!isComment)}
        >
          <span className="hover:text-primary cursor-pointer">
            <FaComment />
          </span>
        </span>
        <span className="flex w-full justify-center">
          <span className="hover:text-primary cursor-pointer">
            <FaShare />
          </span>
        </span>
      </div>
      <div className={isComment ? "" : "hidden"}>
        <form>
          <label>Comment</label>
          <textarea
            className="input input-bordered w-full"
            name="comment"
            id="comment_postId"
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
          />
          <input
            type="submit"
            className="btn btn-primary float-right mt-2"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Post;
