import BigCard from "../components/BigCard";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { SmallCard } from "../components/SmallCard";
import TopCarts from "../components/TopCarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

export default function Home() {
  return (
    <Layout>
      <div className="col-span-full md:col-span-8 py-5 md:py-16 md:pb-10">
        <BigCard />
      </div>

      <div className="col-span-full md:col-span-5 py-5 md:py-16 md:pb-10">
        <Header title="Top charts" />
        {/* larger screen top charts */}
        <div className="hidden md:block">
          {[1, 2, 3].map((i) => (
            <TopCarts key={i} />
          ))}
        </div>

        {/* smaller screen top charts */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            freeMode
            centeredSlides
            direction="horizontal"
            grabCursor
            centeredSlidesBounds
            modules={[FreeMode, Scrollbar]}
          >
            {[1, 2, 3].map((i) => (
              <SwiperSlide key={i}>
                <TopCarts />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="col-span-full">
        <Header title="New releases." className="mb-3" />

        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 80 },
            480: { slidesPerView: 3, spaceBetween: 150 },
            768: { slidesPerView: 3, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 150 },
          }}
          freeMode
          centeredSlides
          grabCursor
          centeredSlidesBounds
          modules={[FreeMode, Scrollbar]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 9, 8]?.map((i) => (
            <SwiperSlide key={i}>
              <SmallCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="col-span-full my-5">
        <Header title="Around the world." className="mb-3" />

        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 80 },
            480: { slidesPerView: 3, spaceBetween: 150 },
            768: { slidesPerView: 3, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 150 },
          }}
          freeMode
          centeredSlides
          grabCursor
          centeredSlidesBounds
          modules={[FreeMode, Scrollbar]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 9, 8]?.map((i) => (
            <SwiperSlide key={i}>
              <SmallCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
}
