import electronics from "../assets/categories/electronics.jpg";
import jewellery from "../assets/categories/jewellery.jpg";
import men from "../assets/categories/men.jpg";
import women from "../assets/categories/women.jpg";


const categoryData = [
  {
    id: 1,
    category: "electronics",
    title: "Electronics",
    image: electronics,
    description: "Latest gadgets, mobiles & smart devices"
  },

  {
    id: 2,
    category: "jewelery",
    title: "Jewellery",
    image: jewellery,
    description: "Elegant jewellery for every occasion"
  },

  {
    id: 3,
    category: "men's clothing",
    title: "Men Fashion",
    image: men,
    description: "Trendy outfits for modern men"
  },

  {
    id: 4,
    category: "women's clothing",
    title: "Women Fashion",
    image: women,
    description: "Premium styles made for women"
  }
];


const Categories = () => {

  return (
    <section className="flex flex-col gap-6">

      <div>
        <h2 className="text-3xl font-bold text-heading">
          Explore Categories
        </h2>

        <p className="mt-2 text-text">
          Find everything you need from our popular collections
        </p>
      </div>


      <div className="
        grid 
        grid-cols-2 
        gap-4 
        sm:grid-cols-3 
        lg:grid-cols-4
      ">

        {
          categoryData.map((elem)=>(
            
            <div
              key={elem.id}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card
                p-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-b-5
               hover:border-primary
                hover:shadow-[0_18px_35px_rgba(57,230,212,0.20)]
              "
            >
              <div
                className="
                  relative
                  flex
                  h-44
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-bg
                "
              >

                <img
                  src={elem.image}
                  alt={elem.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />             

              </div>



              {/* Content */}
              <div className="mt-4">

                <h3
                  className="
                    text-xl
                    font-bold
                    text-heading
                    transition
                    group-hover:text-primary
                  "
                >
                  {elem.title}
                </h3>


                <p
                  className="
                    mt-2
                    line-clamp-2
                    text-sm
                    leading-6
                    text-text
                  "
                >
                  {elem.description}
                </p>


                <button
                  className="
                    mt-4
                    text-sm
                    font-semibold
                    text-primary
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
                >
                  Explore →
                </button>


              </div>


            </div>

          ))
        }

      </div>


    </section>
  )
}


export default Categories;