import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material"; // Import Skeleton from MUI
import { add } from "../../store/cartSlice";
import toast from "react-hot-toast";

function Cards({ item }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Simulate data fetching delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating 1.5s loading time
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (bookDetails) => {
    toast.success("Added to cart");
    dispatch(add(bookDetails));
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card glass w-full h-full hover:scale-105 duration-200">
          {loading ? (
            <>
              <Skeleton variant="rectangular" width={210} height={200} />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton variant="rectangular" width={100} height={200} />
            </>
          ) : (
            <>
              <figure>
                <img src={item.image} alt="Book cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between flex items-center">
                  <p>
                    Price:
                    <span className="pl-2 items-center text-green-400">
                      ${item.price}
                    </span>
                  </p>
                  <button
                    className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md hover:bg-white hover:text-[#e5981f] duration-300 cursor-pointer"
                    onClick={() => handleClick(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
