import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Product.css";

const Productlist = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 4;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageNumber(Math.ceil(data.length / perPage));
    setCurrentItems(data.slice(itemOffset, itemOffset + perPage));
  }, [itemOffset, perPage, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * perPage;
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* <div className=""> */}
      <div className="flex justify-center md:justify-end mt-10 gap-x-5  ">
        <Link to="/add-category">
          <button className="p-2 bg-[#3081D0] w-[90px] md:w-[130px] h-[40px] md:h-[50px] rounded-md  md:rounded-2xl text-white text-xs md:text-lg">
            Add Category
          </button>
        </Link>

        <Link to="/add-product">
          <button className="p-2 bg-[#3081D0] w-[90px] md:w-[130px] h-[40px] md:h-[50px] rounded-md  md:rounded-2xl text-white text-xs md:text-lg">
            Add Products
          </button>
        </Link>
      </div>

      <div className="flex-col items-end">
        <div className="flex gap-10 flex-wrap mt-12 mr-16 ml-16  ">
          {currentItems.map((item, index) => (
            <div className="flex  ">
              <div className="border border-none shadow-lg w-[250px] md:w-[500px] h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <div key={index} className="flex">
                  <div className="flex justify-center">
                    <img
                      src={`http://localhost:5000/images/${item.imagePath[0]}`}
                      className=" w-[150px] md:w-[290px] h-[200px] md:h-[300px] mt-5 ml-5 object-contain md:object-cover cursor-pointer"
                      alt="laptop"
                    />
                  </div>

                  <div className="p-2 mt-8 ml-2">
                    <p className="font-bold  text-center text-base md:text-xl text-blue-600">
                      {item.ProductName}
                    </p>
                    <div className="flex justify-between mt-4">
                      <p className="font-medium text-sm md:text-lg">
                        {item.category}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p className="font-medium text-sm md:text-lg">
                        Price:{"$" + item.price}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p className="font-medium text-sm md:text-lg">
                        Stocks:{item.total}
                      </p>
                    </div>
                    <div className="mt-2 flex">
                      <div>
                        <p className="text-lg">Rating:</p>
                      </div>
                      <div className="mt-1">
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                    </div>
                    <div className=" text-center mt-5">
                      <button className="p-2 w-[140px] h-[40px]  flex justify-center items-center font-semibold text-white text-xl bg-[#3081D0]">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-x-4 justify-between mt-10 mr-12 ml-16">
          <p className="text-base text-gray-500">10 of 456 items</p>
          <ReactPaginate
            pageCount={pageNumber}
            onPageChange={handlePageClick}
            breakLabel="..."
            nextLabel="next >"
            pageRangeDisplayed={3}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-cum"
            previousLinkClassName="page-cum"
            nextLinkClassName="page-cum"
            activeLinkClassName="active"
          />

          <p>
            Show <span className="text-yellow-600">10 rows</span>
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Productlist;
