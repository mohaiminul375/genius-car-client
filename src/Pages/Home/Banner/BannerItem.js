import React from 'react';
import './BannerItrm.css'

const BannerItem = ({slide}) => {
    const {image, id,pre,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img ">
        <img src={image} className="w-full rounded-xl" alt="" />
        </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className="text-6xl font-bold text-white">
              affordable <br/>
              price for car <br/>
              servicing.
            </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
            <p className="text-xl text-white">
              There are many variations of passage of available,but the majority suffered alternation some form.
            </p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${pre}`} className="btn btn-circle mr-5">
              ❮
            </a>
            <a href={`#slide${next}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    );
};

export default BannerItem;