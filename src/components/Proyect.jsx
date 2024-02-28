import React from 'react'
import { IoPaperPlaneSharp } from "react-icons/io5";
export default function Proyect() {
    return (
        <div className="mt-10">
           <h1 className=' mb-10 text-center  text-2xl  lg:text-3xl bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'>
            Trabajos Realizados Destacados</h1>
            <div className="flex justify-center align-center">
                <div className=" grid grid-cols-1  gapy-x-0 gap-y-4 lg:grid-cols-3 lg:gap-y-5 lg:gap-x-10 ">
                    <div className="w-[300px] bg-gray-300 p-5">
                    <h2 className=' text-center   bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'>
                    Impulse Radio</h2>
                        <video  className= "mb-5" width="300" height="300" autoPlay muted playsInline controls={false} >
                            <source src="/Img/radio2.mp4" type="video/mp4" />
                           
                            Tu navegador no admite el tag de video.
                        </video>
                        <p className="text-gray-800 text-center text-sm ">Desarrollado cont Next.js en conjunto con Redux Toolkit y Firebase.</p>
                        <p className="bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-center text-sm "><a href="https://inpulse-radio.vercel.app/" className="text-sky-900 text-center text-sm mt-10 ">🛩️ Visitar Sitio</a></p>
                        <p className="bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-center text-sm "><a href="https://inpulse-radio.vercel.app/" className="text-sky-900 text-center text-sm mp-10 ">💼 GitHub</a></p>
                    </div>

                    <div className="w-[300px] bg-gray-300 p-5">
                    <h2 className=' text-center   bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'>
                    Bolsa de Trabajo Yobbix</h2>
                        <video  className= "mb-5" width="300" height="300" autoPlay muted playsInline controls={false} >
                            <source src="/Img/yobbix2.mp4" type="video/mp4" />
                           
                            Tu navegador no admite el tag de video.
                        </video>
                        <p className="text-gray-800 text-center text-sm mb-10 ">Desarrollado con Laravel, Tailwind CSS y Fortify.</p>
                        
                        <p className=" text-center text-sm "><a href="https://github.com/FredesVirginia/p-yobbixxxx" className="text-sky-900 text-center text-sm mt-10 ">💼 GitHub</a></p>
                       
                      
                  
                    </div>

                    <div className="w-[300px] bg-gray-300 p-5">
                    <h2 className=' text-center   bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'>
                    Api Videogames</h2>
                        <video  className= "mb-5" width="300" height="300" autoPlay muted playsInline controls={false} >
                            <source src="/Img/video.mp4" type="video/mp4" />
                           
                            Tu navegador no admite el tag de video.
                        </video>
                        <p className="text-gray-800 text-center text-sm mb-10 ">Desarrollado con React Redux y Express.</p>
                        
                        <p className=" text-center text-sm "><a href="https://github.com/FredesVirginia/App-Videogames" className="text-sky-900 text-center text-sm mt-10 ">💼 GitHub</a></p>
                       
                      
                  
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}
