const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Gin',
    age: 32,
    message: 'Yo, Gon!',
  })
  const changeMessage = () => {
    setPerson({ ...person, message: "it's been a while!" })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={changeMessage}>changeMessage</button>
    </>
  )
}

const UseEffectCleanup = () => {
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  const [size, setSize] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello World')
    } else {
      setText('random title')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick}>change title</button>
    </>
  )
}

const HunterInfoList = () => {
  const [list, setList] = useState(hunters)
  return (
    <>
      <main className='page'>
        {/* rest of the content */}
        <section className='recipe-content'>
          <article>
            <h4>Hunter Instractions</h4>
            {list.map((item, index) => {
              const { id, name } = item
              return (
                <div key={index} className='single-instruction'>
                  <header>
                    <p>Phantom Troup's Numbers {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{name}</p>
                </div>
              )
            })}
          </article>
          <article className='second-column'>
            <div>
              <h4>Nen Abilities</h4>
              {hunters.map((ability, index) => {
                const { strength, abilityName, name } = ability
                return (
                  <p key={index} className='single-ingredient'>
                    {name} :{abilityName}
                    {strength}
                  </p>
                )
              })}
            </div>
            {/* <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className='single-tool'>
                      {item}
                    </p>
                  )
                })}
              </div> */}
          </article>
        </section>
      </main>
    </>
  )
}

const url = 'http://api.github.com/users'
const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const AllCourseList = () => {
  const [courses, setCourses] = useState(coursesData)
  const removeItem = (id) => {
    let newCourse = courses.filter((course) => course.id !== id)
    setCourses(newCourse)
  }
  return (
    <>
      <h1>All Course</h1>
      <div className='row'>
        {courses.map((course) => {
          return <Courses {...course} key={course.id} />
        })}
      </div>
      <hr />
    </>
  )
}

function HunterList() {
  return (
    <div>
      {hunters.map((hunter) => {
        // const { name, nenType, strength } = hunter
        return <Hunter key={hunter.id} {...hunter} />
      })}
    </div>
  )
}

const Courses = (props) => {
  const { name, id, title, text, img, emoji } = props
  return (
    <>
      <Link to={`/eachcourse/${props.id}`} className='card card-course'>
        <div className='card-content'>
          <div className='text-center'>
            <img src={img} alt='sample' />
            <h3>{title} </h3>
            <h4>
              {text} / {id} / {emoji}
            </h4>
          </div>
          <button className='btn btn-block btn-green'>Start</button>
        </div>
      </Link>
      <Link to={`/eachcourse`} className='card card-course'>
        <div className='card-content'>
          <div className='text-center'>
            <img src={img} alt='sample' />
            <h3>{title} </h3>
            <h4>
              {text} / {id} / {emoji}
            </h4>
          </div>
          <button className='btn btn-block btn-green'>Start</button>
        </div>
      </Link>
    </>
  )
}
