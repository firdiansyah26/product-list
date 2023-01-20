import React, { useState } from "react";
import Link from "next/link";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Download from "@/components/Download";

interface Lists {
  id: number;
  thumbnail: string;
  title: string;
  brand: string;
  category: string;
}

interface Product {
  products: Array<Lists>;
  total: number;
  skip: number;
  limit: number;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  let response: Product = await res.json();

  return {
    props: {
      response,
    },
  };
};

const Index = ({
  response,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [list, setList] = useState(response?.products);

  return (
    <>
      <div className="top-12 relative overflow-x-auto bg-white">
        <Download type="list" data={list} />

        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-gray-700 uppercase bg-[#8edfc0]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((value: Lists, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b "
                >
                  <td className="px-6 py-4">
                    <img
                      className="h-8 w-8"
                      src={value.thumbnail}
                      alt={value.title}
                    />
                  </td>
                  <td className="px-6 py-4">{value.title}</td>
                  <td className="px-6 py-4">{value.brand}</td>
                  <td className="px-6 py-4">{value.category}</td>
                  <td className="px-6 py-4">
                    <Link href={`/detail/${value.id}`}>
                      <span className="cursor-pointer text-gray-900 bg-[#8edfc0] border font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-opacity-60">
                        Detail
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;

// export default function Index() {
//   // useEffect(() => {
//   //   const res = fetchData();
//   //   console.log("res ; ", res);
//   // }, []);

//   return (
//     <>
//       <Tabel />
//     </>
//   );
// }
