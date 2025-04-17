import React from "react";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { bookName, category, image, rating } = singleBook;
  return (
    <div className="card bg-base-100 shadow-sm border p-2">
      <div className="flex justify-center">
        <figure className="w-[250px] h-[250px]">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="max-w-[25ch]">
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
