import Head from "next/head";
import Link from "next/link";

import Data from "../utils/Data";
import Img from "next/image";
import Hero from "../components/Hero";
import ArticleMedium from "../components/articlemedium";
import Music from "../components/Music";
import Deporte from "../components/Deporte";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Jhon C</title>
        <meta name="description" content="Site Web Jhon C" />
        <link rel="icon" href="/favicon.ico" />
        <script
          data-ad-client="ca-pub-9485069881520994"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Hero />
      <ArticleMedium />
      <div className="mt-5 ">
        <div className="flex justify-between mt-32 mb-2">
          <h3 className="text-4xl font-semibold uppercase">Juegos</h3>
          <button className="px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            See All
          </button>
        </div>
        <div className="container mansonry">
          {Data.map((items, index) => (
            <div
              key={index}
              className="mb-5 overflow-hidden bg-white border-b-4 border-green-500 md:w-full sm:w-full break-inside"
            >
              <Img
                src={items.image}
                alt={items.title}
                width="400"
                height="256"
                className="object-cover w-full h-32 sm:h-48 md:h-64"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <span className="p-1.5 mb-1 text-sm font-semibold leading-none text-green-500 bg-green-200 rounded-full">
                    News
                  </span>
                  <span className="mb-1 text-sm font-semibold leading-none text-gray-600 ">
                    {items.date}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold leading-tight sm:leading-normal">
                  {items.title}
                </h3>
                <p className="mb-2 text-base text-gray-600">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-32 mb-2">
          <h3 className="text-4xl font-semibold uppercase">Music</h3>
          <button className="px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            See All
          </button>
        </div>
        <Music />

        <Deporte />
        <div className="flex justify-between mt-32 mb-2">
          <h3 className="text-4xl font-semibold uppercase">Noticias</h3>
          <button className="px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            See All
          </button>
        </div>
        <div className="mansonry ">
          {Data.map((items, index) => (
            <>
              <div
                key={index}
                className="mb-5 overflow-hidden bg-white border-b-4 border-green-500 w-11/11 break-inside"
              >
                <Img
                  src={items.image}
                  alt={items.title}
                  width="400"
                  height="256"
                  className="object-cover w-full h-32 sm:h-48 md:h-64"
                />
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <span className="p-1.5 mb-1 text-sm font-semibold leading-none text-green-500 bg-green-200 rounded-full">
                      News
                    </span>
                    <span className="mb-1 text-sm font-semibold leading-none text-gray-600 ">
                      {items.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold leading-tight sm:leading-normal">
                    {items.title}
                  </h3>
                  <p className="mb-2 text-base text-gray-600">
                    {items.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Link href="/about">About</Link>
    </div>
  );
}

// export async function getStaticProps() {
//   const resultado = await fetch(
//     "https://images-api.nasa.gov/search?media_type=image"
//   );
//   const preview = await resultado.json();
//   const items = await preview.collection.items;
//   return {
//     props: { items },
//   };
// }
