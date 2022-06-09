import Image from 'next/image'
import React from 'react'

export const BlogRelated = () => {
  return (
    <div className="bg-primary">
      <div>
        <h2>Relacionadas</h2>
      </div>
      <div className="carousel carousel-center w-screen p-4 space-x-4 bg-primary rounded-box gap-4">
        <div className="carousel-item ">
          <div className="flex flex-col text-white">
            <div className="relative h-48 w-48">
              <Image
                src="/images/IMG_3.jpg"
                className="rounded-box"
                layout="fill"
                alt="blog related"
              />
            </div>
            <div className="w-48">
              <p>8 de Junio 2022</p>
              <h3 className="text-white">
                Tendencias tecnológicas en el sector salud que van a
                revolucionar este 2022.
              </h3>
              <button className="btn btn-accent text-white">
                Leer completa
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="flex flex-col text-white">
            <div className="relative h-48 w-48">
              <Image
                src="/images/IMG_3.jpg"
                className="rounded-box"
                layout="fill"
                alt="blog related"
              />
            </div>
            <div className="w-48">
              <p>8 de Junio 2022</p>
              <h3 className="text-white">
                Tendencias tecnológicas en el sector salud que van a
                revolucionar este 2022.
              </h3>
              <button className="btn btn-accent text-white">
                Leer completa
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="flex flex-col text-white">
            <div className="relative h-48 w-48">
              <Image
                src="/images/IMG_3.jpg"
                className="rounded-box"
                layout="fill"
                alt="blog related"
              />
            </div>
            <div className="w-48">
              <p>8 de Junio 2022</p>
              <h3 className="text-white">
                Tendencias tecnológicas en el sector salud que van a
                revolucionar este 2022.
              </h3>
              <button className="btn btn-accent text-white">
                Leer completa
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="flex flex-col text-white">
            <div className="relative h-48 w-48">
              <Image
                src="/images/IMG_3.jpg"
                className="rounded-box"
                layout="fill"
                alt="blog related"
              />
            </div>
            <div className="w-48">
              <p>8 de Junio 2022</p>
              <h3 className="text-white">
                Tendencias tecnológicas en el sector salud que van a
                revolucionar este 2022.
              </h3>
              <button className="btn btn-accent text-white">
                Leer completa
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="flex flex-col text-white">
            <div className="relative h-48 w-48">
              <Image
                src="/images/IMG_3.jpg"
                className="rounded-box"
                layout="fill"
                alt="blog related"
              />
            </div>
            <div className="w-48">
              <p>8 de Junio 2022</p>
              <h3 className="text-white">
                Tendencias tecnológicas en el sector salud que van a
                revolucionar este 2022.
              </h3>
              <button className="btn btn-accent text-white">
                Leer completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
