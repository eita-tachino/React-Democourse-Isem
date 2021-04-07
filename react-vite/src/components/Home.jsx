import React from 'react'
import { Link } from 'react-router-dom'
import {
  GiDna1,
  GiGlassHeart,
  GiBeamsAura,
  GiComputing,
  GiDiceTwentyFacesOne,
  GiEarthAsiaOceania,
} from 'react-icons/gi'

export default function Home() {
  const title = 'Make it possible with Isem'
  const description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sit non veritatis voluptatibus, in qui voluptatum, aliquam dicta modi ex animi. In rerum repudiandae porro placeat blanditiis dolorem quaerat amet veniam! Officia, quod voluptatibus, quis placeat laboriosam minima, blanditiis perferendis deleniti qui facere possimus illo tempore ad impedit laborum eum esse? Sunt dicta vel perferendis maxime sapiente ipsum doloremque quod consequuntur facilis illum, provident eos quasi temporibus possimus earum repellendus.'
  const img =
    'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3MDM5MDQzMHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  return (
    <>
      <div className='main'>
        <div className='recipe-page'>
          {/* hero */}
          <section className='recipe-hero'>
            <img src={img} alt='' className='about-img' />
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className='recipe-icons'>
                <article>
                  <GiDiceTwentyFacesOne />
                  <h5>Dice Twenty </h5>
                  {/* <p>{prepTime} min.</p> */}
                </article>
                <article>
                  <GiComputing />
                  <h5>Computing</h5>
                  {/* <p>{cookTime} min.</p> */}
                </article>
                <article>
                  <GiEarthAsiaOceania />
                  <h5>Hello World!</h5>
                  {/* <p>{servings} </p> */}
                </article>
              </div>
            </article>
          </section>
        </div>
      </div>
      <hr />
    </>
  )
}
