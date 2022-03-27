import { useState } from 'react';
import Buttons from './Buttons';
import data from './data';

function Home() {

const [courses, setCourses] = useState(data);
const [showText, setShowText] = useState(false);

const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
}

const removeItem = (id) => {
  let newList = courses.filter(course => course.id !== id);
  setCourses(newList)
}

const chosenCourses = (search) =>{
  const newChosen = data.filter(element => element.search ===search)
  setCourses(newChosen)
}


return (
<div>
<div className="container">
<h1>Курсы по программированию</h1>
</div>

<Buttons filteredCourses={chosenCourses}/>

<div className="container">
<h2>Осталось пройти {courses.length} курсов</h2>
</div>

{courses.map((item => {
  const {id, names, image, description, showMore} = item;

  return (
    <div className='main' key = {id}>
      <div className='container'>
      <h3>{names}</h3>
      </div>

      <div className='container'>
      <img src={image} width='250px' alt = 'img' />
      </div>

      <div className='container'>
      <p>{showMore ? description: description.substring(0,170)+ '...'}
      <button className='btnOne' onClick = {() => showTextClick(item)}>{!showMore ? 'Показать больше' : 'Показать меньше' }</button>
      </p>
      </div>

      <div className='container'>
        <button className = 'btnTwo' onClick={()=> removeItem(id)}>Уже умею</button>
      </div>
    </div>
  )
}))}

<div className = 'container add'>

  <button className='btnTwo' onClick = {() => setCourses([])}>Все умею</button>
</div>
</div>
)
}

export default Home;