import Image from 'next/image'
import React from 'react'

export const BlogBody = () => {
  return (
    <div className=" bg-white">
      <div className="w-3/4 mx-auto prose">
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          praesentium quasi voluptate quod, nostrum veritatis quidem nulla
          aperiam, hic aspernatur, neque at tempora quaerat officiis?
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ratione, temporibus, nemo possimus impedit excepturi modi repellendus
          dolore, quisquam vel animi vitae aliquid adipisci ipsum id illo in
          dolorem hic?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          laboriosam, dolorem non facere culpa veniam saepe qui beatae illum,
          officiis et quaerat voluptates autem temporibus est libero doloribus
          dignissimos consectetur magni tenetur assumenda voluptatum. Iste
          consequatur iusto ducimus corrupti nisi?
        </p>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          illo.
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          facilis vero neque vitae voluptatem fugit recusandae quod doloremque
          maiores sapiente iste animi, minus nesciunt velit provident sunt
          pariatur suscipit ducimus veniam nostrum ratione veritatis aut ipsum
          tempore. Nobis fuga ut voluptates ab quisquam eveniet similique
          facilis aliquam enim hic nesciunt voluptatibus minus assumenda earum
          deserunt reprehenderit dolore corrupti exercitationem quibusdam
          dolores eaque, veritatis at doloremque incidunt. Odit consequatur
          ullam, quam quas optio quia aliquid pariatur provident vel odio
          cupiditate! Ipsa, ad quod? Vel excepturi explicabo ex nam possimus, ea
          eum iste et officiis unde pariatur distinctio doloremque similique
          enim autem.
        </p>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="relative w-48 h-48">
            <Image
              src="/images/IMG_12.jpg"
              className="w-full"
              layout="fill"
              alt="imagen noticia"
            />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <div className="relative w-48 h-48">
            <Image
              src="/images/IMG_12.jpg"
              className="w-full"
              layout="fill"
              alt={`noticias`}
            />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
