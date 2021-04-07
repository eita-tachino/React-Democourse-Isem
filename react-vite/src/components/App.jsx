import React, { useState, useEffect } from 'react'
import '../App.css'
import Home from './Home'
import Navbar from './Navbar'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'

import { invoices } from '../data/English-full-data'
import { courses } from '../data/courseData'

import { GiDna1, GiGlassHeart, GiBeamsAura, GiOpenBook } from 'react-icons/gi'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'

const NewCourses = () => {
  const newCourse = courses.filter((course) => course.category === 'React')
  console.log(newCourse)
  const newCourseA = courses.find((course) => course.id === parseInt(course.id))
  console.log(newCourseA)
  const newCourseB = courses.find((course) => course.title === '2 React Basics')
  console.log(newCourseB)

  return (
    <div className='main'>
      <div className='row'>
        <Link to='/democourse' className='card card-course'>
          <div className='card-content'>
            <div className='text-center'>
              <img src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60' />
            </div>
            <h3>{newCourseA.title}</h3>
            <p>{newCourseA.text}</p>
            <button className='btn btn-green btn-block'>Start</button>
          </div>
        </Link>

        <Link to='/democourse' className='card card-course'>
          <div className='card-content'>
            <div className='text-center'>
              <img src='https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fDNkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />
            </div>
            <h3>{newCourseB.title}</h3>
            <p>{newCourseB.text}</p>
            <button className='btn btn-green btn-block'>Start</button>
          </div>
        </Link>
      </div>
      <hr />
    </div>
  )
}

const Democourse = () => {
  const acourse = invoices.find((name) => name.id === Number(name.id))
  console.log(acourse)
  const img =
    'https://dl.dropboxusercontent.com/s/vsn8aapbd4s0b5b/english-full-course.png'
  return (
    <>
      <div className='chapters-list'>
        <h1>{acourse.id}</h1>
        <img src={img} alt='Course Title' />
      </div>
      <div className='content-main'>
        <section className='content-article no-toc'>
          <h2 id='-what-will-i-build'>🦄 このコースで学ぶこと</h2>
          <p>
            このコースでは英語長文読解の発展的な内容を学びます。{' '}
            <strong>難関大突破レベル、英検1級レベル</strong>{' '}
            の内容を学んでいきます 🌈
            複雑な文構造や、接続詞の捉え方、難解な文章のシンプル化などについて学んでいきます。
          </p>
          <ul>
            <li>👨‍🎤 英語の考え方の理解</li>
            <li>📰 和訳/絵訳</li>
            <li>🦾 名詞の精度をあげる</li>
            <li>🔥 代名詞の明確化</li>
            <li>⚛️ 前置詞を空間で捉える</li>
            <li>📂 コロン、セミコロンの使い方</li>
            <li>💞 動詞の時制</li>
            <li>🚀 名詞節 &amp; 副詞節</li>
          </ul>
          <h2 id='-is-this-course-right-for-me'>
            🤔 このコースは私に合っていますか?
          </h2>
          <p>
            このコースは上級者レベルで、 🟦
            英検1級レベルの読解力を身につけることに挑戦します。
            なので、最低限英検2級ほどの読解力を持っていることを想定しています。基本的なことには多く触れないので、もし大変そうであれば、先に初級、中級コースを終えてから戻ってきてください。{' '}
          </p>
          <h3 id='test-drive'>Tips</h3>
          <p>
            このコースから価値を得るために全セクションを一度に終わらせる必要はありません。セクション
            1 つや 2 つ分でも構いませんので、できるところまで進めましょう。
          </p>

          <h3 id='when-was-the-course-last-updated'>
            最後にコースが更新されたのはいつですか?
          </h3>
          <p>
            <span className='tag tag-sm tag-pro'>Updated Feb 5th, 2021</span>{' '}
            <span className='tag tag-sm tag-next'>Next v10.0</span>
          </p>
          {/* <h3 id='how-do-i-enroll'>How do I enroll?</h3>
          <p>
            The first few videos are <em>free</em>, so just dive in 🤿. When you
            reach a paid module, you will be asked to pay for a single course or
            upgrade to PRO.
          </p> */}
          <Link to={`/${acourse.id}`}>
            <button className='btn btn-orange'>🈁 Click to Start</button>
          </Link>
        </section>
      </div>
    </>
  )
}
const Demo = () => {
  const { url, path } = useRouteMatch()
  console.log('url', url)
  console.log('path', path)
  const { iid } = useParams()
  const chap = invoices.map((cha) => cha.id === Number(iid))
  console.log(chap)

  const info = invoices.find((inv) => inv.id === Number(iid))
  console.log(info)
  return (
    <>
      <div className='main'>
        <div className='chapters-list'>
          <h2>🎮 Demo Course #{info.id}</h2>
          <h4>🔰 {info.title.toLocaleString()}</h4>
        </div>
      </div>
      <Route path={`${path}/:invoiceId`}>
        <DemoCourseDetail />
      </Route>

      <hr />
      <nav className='chapters-list'>
        <div>
          <h2>Chapters</h2>
        </div>
        {invoices.map((chap) => {
          return (
            <>
              <Link key={chap.id} to={`${url}/${chap.id}`}>
                <div className='chapter-item box box-sm'>
                  <i className='box-icon'>
                    <div>
                      <i className='emoji'>{chap.emoji}</i>
                    </div>
                  </i>
                  <div className='box-content'>
                    <strong>{chap.account}</strong>

                    <span className='subtext'>{chap.title}</span>
                  </div>
                  <div className='video-labels'>
                    <span className='tag tag-sm tag-pro'>free</span>

                    <span className='tag tag-sm'>2:12</span>
                  </div>
                </div>
              </Link>
            </>
          )
        })}
      </nav>
    </>
  )
}

const DemoCourseDetail = () => {
  const { url, path } = useRouteMatch()
  console.log(path)
  console.log(url)
  const { iid, invoiceId } = useParams()
  console.log(iid, invoiceId)
  const each = invoices.find((chapeach) => chapeach.id === Number(invoiceId))
  console.log(each)

  const { account, id, amount } = invoices.find((inv) => inv.id === Number(iid))

  return (
    <div>
      <div className='vid vid-center'>
        <iframe
          src={each.video}
          width='100%'
          height='100%'
          frameBorder='0'
          webkitallowfullscreen=''
          mozallowfullscreen=''
          allowFullScreen=''
        ></iframe>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <NavItem to={<Link to='/'>🏠 </Link>} />
          <NavItem to={<Link to='/democourse'>📺 </Link>} />
          <NavItem icon='🔐 ' />
          <NavItem icon='🆔'>
            <DropdownMenu />
          </NavItem>
        </Navbar>

        <Switch>
          <Route exact path='/'>
            <Home />
            <NewCourses />
          </Route>
          <Route path='/democourse'>
            <Democourse />
          </Route>
          <Route path='/:iid'>
            <Demo />
          </Route>

          <Route path='/*'></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
