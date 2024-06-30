import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemContext'

const Certification = ({images}) => {
    const {mode2} = useContext(ThemeContext)
    return (
        <div className={` ${mode2} cert pt-10 flex flex-col items-center gap-10 md:gap-14 md:pt-16 text-primery `}>
        <h1 className='text-2xl font-bold  md:text-5xl'>Certification</h1>
        <div className="cert-cards  px-3 flex flex-col gap-10 md:flex-row flex-wrap justify-center items-center">
            {images.map((items, index)=>{
                return(
                    <div className="card p-7 rounded-lg flex flex-col items-start gap-3 md:gap-5" key={index}
                    style={{maxWidth:"500px"}}>
                        <img src={items} alt="" />
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Certification
