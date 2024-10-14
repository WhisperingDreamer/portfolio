import './style.css'
import me from './../../img/me.jpg'

function About() {
    return (
        <main className='section'>
            <div className='container-header'>
                <div className='photo'>
                    <img src={me} alt='Ava' />
                </div>
                <div className='quote'>
                    Started developing to make dreams come true
                </div>
            </div>
            <main className='container-main'>
                {/* Привет!<br/>
                <br/>
                Я Мельников Иван Александрович, студент второго курса РУТ (МИИТ), где обучаюсь по специальности «Информационные технологии».<br/>
                В свободное время я люблю играть в видеоигры! Также увлекаюсь музыкой и умею играть на гитаре.<br/>
                <br/>
                На данный момент я активно ищу работу в IT-сфере, подыскиваю вакансии на позиции Frontend разработчика.<br/>
                У меня есть опыт работы с React, и я с удовольствием учусь новым технологиям и инструментам.<br/>
                Открыт для новых возможностей и готов развиваться в команде профессионалов под наставничеством! */}
                Hello!<br/>
                <br/>
                I am Ivan Aleksandrovich Melnikov, a second-year student at Russian University of Transport (MIIT), where I am studying in the Information Technology specialty.<br/>
                In my free time, I like to play video games! I am also interested in music and can play the guitar, drums and piano.<br/>
                <br/>
                At the moment, I am actively looking for a job in the IT field, looking for vacancies for the position of Frontend developer.<br/>
                I have experience working with React, and I enjoy learning new technologies and tools.<br/>
                I am open to new opportunities and ready to grow in a team of professionals under mentorship!
            </main>
        </main>
    )
}

export default About;
