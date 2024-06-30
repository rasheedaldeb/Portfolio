import { useContext } from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
import {ThemeContext} from '../../Context/ThemContext'
const Portfolio = ({projects}) => {
    const {mode2} = useContext(ThemeContext)
    return (
        <div id='portfolio' className={` ${mode2} portfolio flex flex-col justify-center items-center
        gap-10 pt-10 md:pt-16 px-8  text-primery`}>
        <h1 className='text-2xl font-bold md:text-5xl'>Portfolio</h1>
        <div className="portfolio-cards flex flex-col gap-8 md:flex-row flex-wrap justify-center relative">
            {projects.map((item, index)=>{
                return(
                    <div key={index} className='portfolio-card cursor-pointer relative'
                    style={{ maxWidth:"400px"}}>
                        <img src={item.photo} alt="" className='rounded-md' style={{width:"100%"}} />
                        <div className="overlay absolute top-0 left-2/4 -translate-x-2/4 z-10 flex flex-col 
                        items-center justify-center gap-10
                        rounded-md"
                        style={{width:"100%", height:"100%", backgroundColor:"rgb(68 89 100 / 65%)"}}>
                        <div className="overlay-content absolute flex flex-col justify-center items-center gap-10 " 
                        style={{width:"50%"}}>
                        <h3 className='text-2xl font-bold text-hover md:text-4xl align-middle'>{item.title}</h3>
                        <div className="buttons flex gap-16">
                            <button className='border-2 border-hover hover:bg-hover'><Link to={item.github} target='blank'>
                            <i className="fa-solid fa-plus text-xl text-hover hover:text-secondery "></i></Link></button>
                            <button className='border-2 border-hover hover:bg-hover'><Link to={item.url} target='blank'><i className="fa-solid fa-paperclip
                            text-xl text-hover hover:text-secondery"></i></Link></button>
                        </div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Portfolio
