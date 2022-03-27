import me from './me.png';

function AboutMe() {
    
    return (
        <div>
    <br />
<div class='container'>
    <img src={me} width='300px' alt = 'me' />
    <div className='block'>
    <h1>привет, друг!</h1>

<h2>Меня зовут Екатерина и я разработчик на React</h2>
    <h2>Добро пожаловать на мою страницу!</h2>
    </div>
    </div>
    <div className='container'>
<a className='lin' href='mailto:katarinaetya4@gmail.com'>Написать автору</a>
</div>
        </div>
    )
}

export default AboutMe;