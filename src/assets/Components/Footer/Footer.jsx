import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemContext'
const Footer = () => {
    const {mode, mode2} = useContext(ThemeContext)
    return (
        <footer className={` ${mode2} flex flex-col items-center gap-10 pt-7 md:pt-16 `}
        style={{width:"100%",height:"300px", borderTop:"1px solid #263138", transition:"0.3s all"}}>
        <div className={` ${mode2} footer-info flex flex-col items-center justify-center gap-5 lg:gap-10 md:flex-row
        text-secondery`}>
        <ul className='left flex gap-10 font-bold md:text-lg lg:text-xl '>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>skills</Link></li>
        </ul>
        <img src={`/images/rasheed-logo-${mode}.png`} width={200} alt="" />
        <ul className='right flex gap-10 font-bold md:text-lg lg:text-xl'>
            <li>Education</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="social-footer flex flex-col items-center ">
            <h3 className='font-bold md:text-xl'>Follow Me On Social Media</h3>
            <div className="social flex justify-around items-center text-2xl md:text-3xl"
                style={{width: "264px", height:"72px"}}>
                <Link to="https:www.linkedin.com/in/rasheed-aldeb-a3aa68259"><i class="fa-brands fa-linkedin"></i></Link>
                <Link to="https://www.facebook.com/rashed.aldeb.16"><i class="fa-brands fa-facebook"></i></Link>
                <Link to="https://x.com/RasheedAld75756"><i class="fa-brands fa-x-twitter"></i></Link>
            </div>
        </div>
        </footer>
    )
}

export default Footer
