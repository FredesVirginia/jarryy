import React from 'react'

export default function Proyect() {
    return (
        <div className="mt-20">
            <h1 className=' text-center text-2xl  lg:text-3xl bg-gradient-to-r from-sky-600 to-sky-900 bg-clip-text text-transparent'>
                Trabajos realizados Destacados
            </h1>

           <div className="flex justify-center align-center">
           <div className=" mt-16   grid grid-cols1 gap-y-5  lg:grid-cols-3  lg:gap-x-32 lg:gap-y-10 ">
                <div class="border-2 border-blue-500 p-4 rounded-t-lg  w-[300px] h-[300px]">
                    <h2>Proyecto 1 </h2>
                    <div>
                    <video   autoplay loop muted>
                        <source src="/Img/ImpulseRadio.mp4 " type="video/mp4" />
                        Tu navegador no soporta el elemento de video.

                    </video> 
                    </div>
                    <h6> Descripcion del Proyecto  </h6>
                </div>
                <div class="border-2 border-blue-500 p-4 rounded-t-lg  w-[300px] h-[300px]">
                    <h2>Proyecto 2 </h2>
                    <h6> Descripcion del Proyecto </h6>
                    <div></div>
                </div>
                <div class="border-2 border-blue-500 p-4 rounded-t-lg  w-[300px] h-[300px]">
                    <h2 >Proyecto 3 </h2>
                    <h6> Descripcion del Proyecto </h6>
                    <div></div>
                </div>
            </div>
           </div>
        </div>
    )
}
