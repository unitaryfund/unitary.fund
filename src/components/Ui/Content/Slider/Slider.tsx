// import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import type { CollectionEntry } from 'astro:content';

import { BlogItem } from '~/components/Pages/Blog/Content/BlogItem';
import { ReactComponent as ArrowIcon } from '~/assets/svg/arrow.svg';

type BlogSliderProps = {
  posts: Array<CollectionEntry<'blog'>>;
};

export default function Slider({ posts }: BlogSliderProps) {
  return !!posts?.length ? (
    <Swiper
      className="w-full"
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          noSwiping: true,
          noSwipingClass: 'swiper-slide',
        },
      }}
      modules={[Navigation]}>
      {posts.map((post) => (
        <SwiperSlide key={post.id} className="swiper-slide !h-auto">
          <BlogItem key={post.id} post={post} className="h-full" />
        </SwiperSlide>
      ))}
      <div className="flex mt-5 md:mt-14 gap-x-2">
        <div
          className="swiper-button-prev flex items-center cursor-pointer px-3 justify-start md:justify-center w-1/2 md:w-[50px] h-[35px] bg-black"
          title="Prev">
          <ArrowIcon className="rotate-180" />
        </div>
        <div
          className="swiper-button-next flex items-center cursor-pointer px-3 justify-end md:justify-center w-1/2 md:w-[50px] h-[35px] bg-black"
          title="Next">
          <ArrowIcon />
        </div>
      </div>
    </Swiper>
  ) : null;
}
