import { useContext } from 'react'
import '../About/button.css'
import { Link } from 'react-router-dom'
import { ThemeContext} from '../../Context/ThemContext'
const Hero = () => {
    const {mode2} = useContext(ThemeContext)
    return (
        <>
        <div id='hero' className=' h-screen hero px-5 md:px-16 pt-24 flex flex-col 
        gap-5 lg:flex-row-reverse lg:items-center justify-around items-center '>
            <img src="/images/Home_art 1.png" alt="" className=' w-full md:max-w-sm 
            lg:max-w-md xl:max-w-md'/>
            {/* hero information */}
        <div className={` ${mode2} hero-info flex flex-col text-primery  items-start md:gap-8`}>
            <div className="top flex flex-col gap-4">
            <h3 className='text-lg '>Hello, Welcome</h3>
            <h1 className='text-5xl font-bold  lg:text-7xl'>I'm Rasheed </h1>
            <h3 className='text-xl  pb-4 md:text-2xl font-bold'>Frontend Developer</h3>
            </div>
            <p className=' leading-8 md:text-lg md:max-w-lg lg:max-w-xl'>
            Frontend Developer, I creat professional web application for business, companies,
            skilled in leadership, seeking to leverage solid development skills with focus on
            collaboration, communication and passion.</p>
            <button style={{marginTop: "10px"}} className='cv-contact'>
            <Link to="https://t.me/rasheedaldeb" target='blank'>Contact Me 
            <i className="fa-solid fa-arrow-right pl-2"></i></Link></button>
        </div>
        </div>
        </>
    )
}

export default Hero
