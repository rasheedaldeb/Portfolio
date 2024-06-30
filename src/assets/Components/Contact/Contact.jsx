import { useContext } from 'react'
import  './Contact.css'
import {ThemeContext} from '../../Context/ThemContext'
const Contact = () => {
    const {mode2} = useContext(ThemeContext)
    return (
        <div id='contact' className={` ${mode2} contact pt-10 flex flex-col items-center gap-10 md:gap-14 md:pt-16 pb-16 text-primery`}>
            <h1 className='text-2xl font-bold md:text-5xl'>Contact <span className={` ${mode2} text-secondery`}>Me</span></h1>
            <div className="contact-info flex flex-col gap-10 md:justify-around items-center md:flex-row px-7" style={{width:"100%"}}>
            <div className="personal-info flex flex-col justify-center  items-start gap-6">
                <h2 className='text-lg font-bold md:text-4xl'>Contact <span className={` ${mode2} text-secondery`}>Information</span></h2>
                <ul className='flex flex-col gap-7 md:gap-10'>
                    <li><h3 className='font-bold flex items-center gap-2 md:text-2xl'><i className="fa-solid fa-phone text-xl md:text-2xl text-secondery"></i>Phone</h3> 
                    <span className=' md:text-lg pl-6 md:pl-8'>+963937071349</span></li>
                    <li><h3 className='font-bold flex items-center gap-2 md:text-2xl'><i className="fa-solid fa-envelope text-xl text-secondery md:text-2xl"></i>Email</h3>
                    <span className=' md:text-lg pl-6 md:pl-8'>rasheedaldeb@gmail.com</span></li>
                    <li><h3 className='font-bold flex items-center gap-2 md:text-2xl'><i className="fa-solid fa-map-location-dot text-xl text-secondery md:text-2xl"></i>Address</h3>
                    <span className=' md:text-lg pl-6 md:pl-9'>Doelaa-Damascus-Syria</span></li>
                </ul>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.35619884629!2d36
            .20049297904592!3d33.50759136667295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15
            18e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2snl!4v1719512916363
            !5m2!1sen!2snl"
            style={{
            width:"500px",
            height:"400px",
            style:"border:0;",
            loading:"lazy"
            }}>
            </iframe>
            </div>
            
        </div>
    )
}

export default Contact
