import React from "react";

const Product = (props) => {
  return (
    <div className="flex my-4">
      <div className="image h-40">
        <img className="h-full" src={props.productImageUrl} alt="product" />
      </div>

      <div className="content ml-6 flex flex-col justify-end">
        <div className="content-header flex items-center">
          <div
            className="cursor-pointer"
            onClick={() => props.onVote(props.id)}
          >
            <i
              class="fa fa-caret-up text-4xl text-blue-500"
              aria-hidden="true"
            ></i>
          </div>
          <span className="text-xl font-bold ml-2">{props.votes}</span>
        </div>

        <div className="content-main">
          <a className="text-blue-600" href={props.url}>
            {props.title}
          </a>
          <p>{props.description}</p>
        </div>

        <div className="content-extra mt-3">
          <span className="text-gray-500 mr-1">Submitted by: </span>
          <img
            className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
            src={props.submitterAvatarImg}
            alt="submitter avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
