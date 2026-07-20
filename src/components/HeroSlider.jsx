import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MoveRight } from 'lucide-react';
import heroImg2  from "../assets/banner1.jpg"
import heroImg3  from "../assets/banner2.jpg"
import heroImg4 from "../assets/electricity.png"
import heroImg5 from "../assets/appliances.jpg"
const HeroSlider = () => {
  return (
<Swiper
  className="h-[500px] cursor-pointer mb-10"
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  loop={true}
>
 <SwiperSlide>
  <div
    className="relative flex h-[500px] items-center overflow-hidden rounded-2xl border border-border bg-cover bg-left px-20"
    style={{
      backgroundImage: `url(${heroImg4})`,

    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent"></div>

    <div className="relative z-10 max-w-xl flex flex-col gap-7">

      {/* Badge */}
      <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
        🔥 Summer Sale | Up to 40% Off
      </span>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-6xl">
          Shop Smarter,
        </h1>

        <h1 className="text-5xl font-extrabold leading-tight text-primary lg:text-6xl">
          Live Better.
        </h1>
      </div>

      <p className="max-w-lg text-lg leading-8 text-gray-200">
        Discover premium electronics, fashion, home essentials,
        and much more. Everything you need, delivered faster.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 pt-2">
        <button className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover">
          Shop Now
        </button>

        <button className="flex items-center gap-3 rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:border-primary hover:text-primary">
          View All Products
          <MoveRight size={20} />
        </button>
      </div>

    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="relative h-[500px]  rounded-2xl border border-border bg-cover bg-center bg-no-repeat px-20"
    style={{
      backgroundImage: `url(${heroImg2})`,
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full items-center">
      <div className="max-w-xl space-y-4">

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
          🔥 Men's Collection | Up to 50% Off
        </span>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold leading-tight text-white">
            Dress Sharp,
          </h1>

          <h1 className="text-6xl font-extrabold leading-tight text-primary">
            Own Every Moment.
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-lg text-lg leading-8 text-gray-200">
          Upgrade your wardrobe with premium shirts, jackets, sneakers,
          watches, and everyday essentials designed for the modern man.
        </p>

        {/* Button */}
        <button className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover">
          Shop Now
        </button>

      </div>
    </div>
  </div>
</SwiperSlide>

  <SwiperSlide>
  <div
    className="relative h-[500px] overflow-hidden  rounded-2xl border border-border bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${heroImg3})`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent"></div>

    <div className="relative z-10 flex h-full items-center px-20">
      <div className="max-w-xl space-y-6">

        <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
          ✨ New Women's Collection
        </span>

      <h1 className="text-6xl font-extrabold leading-tight text-white">
  Discover Your
  <span className="block text-primary">
    Signature Look
  </span>
</h1>

        <p className="max-w-md text-lg leading-8 text-gray-200">
          Discover elegant fashion, premium styles, and timeless
          collections crafted exclusively for women.
        </p>

        <button className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover">
          Shop Now
        </button>

      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="relative h-[500px] overflow-hidden  rounded-2xl border border-border bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${heroImg5})`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full items-center px-20">
      <div className="max-w-xl space-y-6">

        {/* Badge */}
        <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
          ⚡ Smart Electronics | Up to 45% Off
        </span>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold leading-tight text-white">
          Power Your
          <span className="block text-primary">
            Everyday Life
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-md text-lg leading-8 text-gray-200">
          Explore the latest smartphones, laptops, headphones,
          smart TVs, kitchen appliances, and gadgets at unbeatable prices.
        </p>

        {/* Button */}
        <button className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover">
          Shop Electronics
        </button>

      </div>
    </div>
  </div>
</SwiperSlide>

    </Swiper>
  );
};

export default HeroSlider;