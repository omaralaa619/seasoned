import React from "react";

const Book = ({ bookImages }) => {
  const { cover, back, spineLeft, spineRight } = bookImages;
  return (
    <div class="book">
      <div class="book-all">
        <div class="book-cover">
          <img src={cover} alt="" />
        </div>
        <div class="book-back bg-slate-500">
          <img src={back} alt="" />
        </div>
        <div class="book-spine left bg-slate-400">
          {/* <img src={spineLeft} className="h-full w-full object-cover" alt="" /> */}
        </div>
        <div class="book-spine right">
          <img src={spineRight} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Book;
