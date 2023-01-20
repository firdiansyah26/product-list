import React, { useState } from "react";
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next";

import ModalImage from "@/components/Modal";
import Download from "@/components/Download";
import { currencyFormat } from "@/plugins/currency";

interface Data {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const response = await res.json();

  const paths = response.products.map((x: { id: number }) => ({
    params: {
      id: `${x.id}`,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  let response: Data = await res.json();

  return {
    props: {
      response,
    },
  };
};

const Detail = ({
  response,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [data, setData] = useState(response);
  const [isShow, setIsShow] = useState(false);
  const [src, setSrc] = useState("");

  function showImage(src: string) {
    setSrc(src);
    setIsShow(true);
  }

  return (
    <>
      {isShow ? <ModalImage src={src} setIsShow={setIsShow} /> : null}

      <div className="top-12 relative flex flex-col p-3 gap-3">
        <span className="text-2xl font-bold text-center">Detail Products</span>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center mb-3">
            <img src={data.thumbnail} alt={data.title} />
          </div>
          <div className="grid grid-cols-[150px_12px_1fr] items-center">
            <span>Images</span>
            <span>:</span>
            <div className="flex flex-row gap-3">
              {data.images.map((value: string, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="drop-shadow-md cursor-pointer"
                    onClick={(e) => {
                      showImage(value);
                      e.preventDefault();
                    }}
                  >
                    <img src={value} alt={data.title} className="w-12 h-12" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-[150px_12px_1fr]">
            <span>Title</span>
            <span>:</span>
            <span className="font-semibold">{data.title}</span>
          </div>
          <div className="grid grid-cols-[150px_12px_1fr]">
            <span>Description</span>
            <span>:</span>
            <span className="font-semibold">{data.description}</span>
          </div>
          <div className="grid grid-cols-[150px_12px_1fr]">
            <span>Brand</span>
            <span>:</span>
            <span className="font-semibold">{data.brand}</span>
          </div>
          <div className="grid grid-cols-[150px_12px_1fr]">
            <span>Category</span>
            <span>:</span>
            <span className="font-semibold">{data.category}</span>
          </div>
          <div className="grid grid-cols-[150px_12px_1fr]">
            <span>Stock</span>
            <span>:</span>
            <span className="font-semibold">{data.stock}</span>
          </div>
          <div className="grid grid-cols-[150px_12px_1fr]">
            <span>Price</span>
            <span>:</span>
            <span className="font-semibold">
              {currencyFormat(data.price || 0)}
            </span>
          </div>
        </div>
        <Download type="detail" data={data} />
      </div>
    </>
  );
};

export default Detail;
