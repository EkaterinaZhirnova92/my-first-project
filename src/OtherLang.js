
import React from 'react';
import { useState } from 'react';
import dataTwo from './dataTwo';


function OtherLang() {
    const [language, setLanguage] = useState(0);
    const {names, image, description} = dataTwo[language]


    const previousLanguage = ()=> {
        setLanguage ((language => {
            language--;
            if (language < 0) {
                return dataTwo.length - 1;
            }
            return language;
        }))
    }

    const nextLanguage = () => {
        setLanguage ((language => {
            language++;
            if(language > dataTwo.length -1) {
                language = 0;
            }
            return language;
        }))
    }

    return (
    <div>
        <div className='container'>
<h1>Другие языки программирования</h1>
</div>

<div className='container'>
<h2>{names}</h2>
</div>

<div className='container '>
    <button className='btnFour' onClick = {previousLanguage}>назад</button>
    <img className='images' src = {image} width='300px' alt='img'/>
    <button className='btnFour' onClick = {nextLanguage}>вперед</button>
</div>
<br />
<div className='cont'>
    <p className='par'>{description}</p>
</div>
    </div>
    )
}

export default OtherLang;