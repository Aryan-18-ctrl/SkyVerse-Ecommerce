import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../Context/EcomContext";
import { useNavigate } from "react-router";
import axios from "axios";
import Loader from "../components/Loader";

const RelatedProducts = () => {
  const [relatedProduct, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { singleProdData } = useContext(MyContext);
  const navigate = useNavigate();

  async function getRelatedProducts() {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${singleProdData.category}`
      );

      const filtered = response.data.filter(
        (item) => item.id !== singleProdData.id
      );

      setRelatedProducts(filtered);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!singleProdData?.category) return;

    getRelatedProducts();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [singleProdData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="px-6 py-12 xl:px-10">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-heading">
          You May Also Like
        </h2>

        <p className="hidden text-sm text-text md:block">
          Similar products picked for you
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProduct.map((elem) => (
          <div
            key={elem.id}
            onClick={() => navigate(`/details/${elem.id}`)}
            className="
              group
              flex
              cursor-pointer
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-card
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary
              hover:shadow-[0_18px_35px_rgba(57,230,212,0.15)]
            "
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-bg p-5">
              <img
                src={elem.image}
                alt={elem.title}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <span
                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  bg-primary/15
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  capitalize
                  text-primary
                "
              >
                {elem.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="min-h-[56px] line-clamp-2 text-lg font-semibold text-heading">
                {elem.title}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>

                  <span className="font-medium text-heading">
                    {elem.rating.rate}
                  </span>

                  <span className="text-sm text-text">
                    ({elem.rating.count})
                  </span>
                </div>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-primary">
                ₹ {Math.floor(elem.price * 85)}
              </h2>

              <div className="mt-auto flex gap-3 pt-6">
                <button
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-border
                    py-3
                    font-medium
                    text-heading
                    transition
                    hover:border-primary
                    hover:text-primary
                  "
                >
                  View Details
                </button>

                <button
                  className="
                    flex-1
                    rounded-xl
                    bg-primary
                    py-3
                    font-semibold
                    text-bg
                    transition
                    hover:bg-primary-hover
                  "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;