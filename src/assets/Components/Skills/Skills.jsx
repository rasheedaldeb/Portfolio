import  './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useContext } from 'react';
import { ThemeContext} from '../../Context/ThemContext'
const Skills = () => {
    const {mode2} = useContext(ThemeContext)
    return (
        <div id='skills' className='pb-16'>
        <div className={` ${mode2} skills-header flex flex-col justify-center items-center gap-6  pt-14 md:pt-20 text-primery`}>
            <h1 className='text-3xl font-bold pb-8 md:text-5xl'>Hard <span className={` ${mode2} text-secondery`}>Skills</span></h1>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >
        <SwiperSlide><img style={{width:"200px"}} src="/images/html.webp" alt="html" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/css.png" alt="css" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/js.png" alt="JS" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/react.png" alt="react" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/tailwind.webp" alt="tailwind" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/git.png" alt="git" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/github.png" alt="github" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/bootstrap.png" alt="bootstrap" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/api.png" alt="api" /></SwiperSlide>
        <SwiperSlide><img style={{width:"200px"}} src="/images/sass.png" alt="sass" /></SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Skills
