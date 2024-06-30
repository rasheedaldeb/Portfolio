import { useContext } from "react"
import { ThemeContext } from "../../Context/ThemContext"
import { Link } from "react-router-dom"

const GetInTouch = () => {
    const {mode2} = useContext(ThemeContext)
    return(
        <div className={` ${mode2} pt-10 flex flex-col items-center gap-10 md:gap-14 md:pt-16 pb-16 text-primery`}>
        <h1 className='text-xl font-bold md:text-5xl'>Let's Talk About Your Next  <span className={` ${mode2} text-secondery`}>Project</span></h1>
        <form action="">
            <div className="name-pass flex flex-col items-center gap-7 ">
            <input type="text"  placeholder="Your Name" required
            style={{height:"50px"}} className=" text-secondery rounded-md pl-4 w-input_small md:w-input_big"/>
            <input type="email"  placeholder="Your E-mail"
            style={{height:"50px"}} className=" text-secondery rounded-md pl-3 w-input_small md:w-input_big" required/>
            <input type="text" placeholder="Subject"
            style={{height:"50px"}} className=" text-secondery rounded-md pl-3 w-input_small md:w-input_big" required/>
            </div>
            <div className="message flex flex-col">
            <textarea cols={40} rows={8} placeholder="Message"
            className=" text-secondery w-input_small md:w-input_big rounded-md mt-7 pl-4 pt-3"></textarea>
            <button style={{marginTop: "20px"}} className='cv-contact'>
            <Link to="https://t.me/rasheedaldeb" target='blank'>Comntact Me 
            <i class="fa-solid fa-paper-plane pl-2"></i></Link></button>
            </div>
        </form>
        </div>
    )
}

export default GetInTouch
