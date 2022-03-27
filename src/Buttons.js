function Buttons({filteredCourses}) {
    return (
        <div className = 'containerTwo'>
            <button className='btnTwo' onClick={() => filteredCourses('front-end')}>Front-end</button>
            <button className='btnTwo' onClick={() => filteredCourses('back-end')}>Back-end</button>
        </div>
    )
}

export default Buttons;