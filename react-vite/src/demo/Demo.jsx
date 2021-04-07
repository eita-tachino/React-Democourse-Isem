const DemoCourseHome = () => {
  const { path } = useRouteMatch()
  const [courses, setCourses] = useState(topics)
  return (
    <>
      <Route path={`${path}/:courseId`}>
        <DemoCourse />
      </Route>

      <nav className='chapters-list'>
        <div>
          <h1>Chapters</h1>
        </div>
        {courses.map((course) => {
          return (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <div className='chapter-item box box-sm'>
                <i className='box-icon'>
                  <div>
                    <i className='emoji'>{course.emoji}</i>
                  </div>
                </i>
                <div className='box-content'>
                  <strong>{course.title}</strong>

                  <span className='subtext'>{course.title}</span>
                </div>
                <div className='video-labels'>
                  <span className='tag tag-sm tag-pro'>free</span>

                  <span className='tag tag-sm'>2:12</span>
                </div>
              </div>
            </Link>
          )
        })}
      </nav>
    </>
  )
}

const DemoCourse = () => {
  const { url, path } = useRouteMatch()
  console.log('url', url)
  console.log('path', path)

  console.log(useParams())
  const { courseId } = useParams()
  const topic = topics.find(({ id }) => id === courseId)
  console.log('topic', topic)

  return (
    <>
      <Route path={`${path}/:subId`}>
        <DemoCoursedetail />
      </Route>

      <div className='vid vid-center'>
        <iframe
          src={topic.video}
          width='100%'
          height='100%'
          frameBorder='0'
          webkitallowfullscreen=''
          mozallowfullscreen=''
          allowFullScreen=''
        ></iframe>
      </div>
      {/* <div>
        <iframe
          src={topic.video}
          frameBorder='0'
          allowFullScreen
          style={{
            position: 'relative',
            top: '0',
            left: '0',
            width: '600px',
            height: '500px',
            border: '0',
          }}
        ></iframe>
      </div> */}
      <ul className='chapters-list'>
        {topic.resources.map((sub) => {
          console.log(sub)
          return (
            <li key={sub.id}>
              <Link to={`${url}/${sub.id}`}>
                <div>
                  <h3>{sub.name}</h3>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

function DemoCoursedetail() {
  const { courseId, subId } = useParams()
  const topic = topics
    .find(({ id }) => id === courseId)
    .resources.find(({ id }) => id === subId)

  return (
    <div>
      <img
        src='https://fireship.io/lessons/firebase-quickstart/img/featured.jpg'
        alt='firebase'
      />
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>more info</a>
    </div>
  )
}

const Hero = () => {
  const title = 'DemoCourse - Adbanced Full Course'
  const description =
    'このAdbanced Full Courseでは、英字新聞や海外ニュースの読解をスムーズにおこなえるレベルまで押し上げます。Imgination is more important than knowledge.'
  const img =
    'https://dl.dropboxusercontent.com/s/vsn8aapbd4s0b5b/english-full-course.png'
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
                  <GiDna1 />
                  <h5>Level</h5>
                  {/* <p>{prepTime} min.</p> */}
                </article>
                <article>
                  <GiGlassHeart />
                  <h5>info</h5>
                  {/* <p>{cookTime} min.</p> */}
                </article>
                <article>
                  <GiBeamsAura />
                  <h5>ability</h5>
                  {/* <p>{servings} </p> */}
                </article>
              </div>
            </article>
          </section>
        </div>
      </div>

      <div className='content-main'>
        <section className='content-article no-toc'>
          <h2 id='-what-will-i-build'>🦄 このコースで学ぶこと</h2>
          <p>
            このコースでは英語長文読解の発展的な内容を学びます。{' '}
            <strong>難関大突破レベル、英検1級レベル</strong>{' '}
            の内容を学んでいきます 🌈 <a href='https://dev.to'>DEV.to</a> and{' '}
            <a href='https://medium.com'>Medium</a>
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
            <a href='https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA?'>
              コースリンク
            </a>
          </p>
          <h3 id='test-drive'>Tips</h3>
          <p>
            このコースから価値を得るために全セクションを一度に終わらせる必要はありません。セクション
            1 つや 2 つ分でも構いませんので、できるところまで進めましょう。
          </p>
          <div>
            <a href='https://next.fireship.io' className='btn btn-orange'>
              コース Demo
            </a>
          </div>
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
        </section>
      </div>

      <hr />
    </>
  )
}

function Resource() {
  const { topicId, subId } = useParams()
  const topic = topics
    .find(({ id }) => id === topicId)
    .resources.find(({ id }) => id === subId)

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>more info</a>
    </div>
  )
}

function Topic() {
  const { topicId } = useParams()
  const { url, path } = useRouteMatch()
  console.log('url', url)
  console.log('path', path)

  const topic = topics.find(({ id }) => id === topicId)
  console.log('topic', topic)
  return (
    <>
      <div className='content-main'>
        <div className='content-article'>
          
          <div>
            <iframe
              src={topic.video}
              frameBorder='0'
              allowFullScreen
              style={{
                position: 'relative',
                top: '0',
                left: '0',
                width: '600px',
                height: '500px',
                border: '0',
              }}
            ></iframe>
          </div>
          <p>{topic.description}</p>
          <ul>
            {topic.resources.map((sub) => (
              <li key={sub.id}>
                <Link to={`${url}/${sub.id}`}>{sub.name} + link</Link>
              </li>
            ))}
          </ul>
          <Route path={`${path}/:subId`}>
            <Resource />
          </Route>
        </div>
      </div>
      <hr />
    </>
  )
}

function Topics() {
  const { url, path } = useRouteMatch()
  console.log('url', url)
  console.log('path', path)
  const newTopic = topics.find((topic) => topic.id === 'chapter-02')
  console.log(newTopic)

  return (
    <>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>

      <nav className='chapters-list'>
        <div>
          <h1>React router course</h1>
        </div>
        <Link to={newTopic}>
          {newTopic.title} + {newTopic.emoji}
        </Link>
        {topics.map(({ name, id, emoji }) => (
          <Link key={id} to={`${url}/${id}`}>
            <div className='chapter-item box box-sm'>
              <i className='box-icon'>
                <div>
                  <i className='emoji'>{emoji}</i>
                </div>
              </i>
              <div className='box-content'>
                <strong>{name}</strong>
                <span className='sub-text'>{name}</span>
              </div>
            </div>
          </Link>
        ))}
      </nav>

      <hr />
    </>
  )
}
