import { FaInstagram } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
export default function Footer() {
  return (
    <div>
      <div className=" mt-10 py-10 bg-gradient-to-r from-sky-600 to-sky-900 ">
        <div className="flex justify-center align-center space-x-4 ">


          <a href="https://www.instagram.com/jonh_clein/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/belen.choque.77920" target="_blank" rel="noopener noreferrer">
            <GrFacebookOption />
          </a>
          <a href="https://github.com/FredesVirginia" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/fredes-virginia-37889511b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <h1 className='mt-5 text-sm text-center italic text-white px-5 lg:px-0'>
          Mi mente se rebela en el estancamiento. Dame problemas, dame trabajo, dame el criptograma más abstracto o el análisis más complejo
          <div className="flex  justify-center align-center mt-2  ">
            <IoIosRemove />
            <IoIosRemove />
            <IoIosRemove />
            <IoIosRemove />
            <IoIosRemove />
          </div>
        </h1>
        <h2 className='mt-1 text-sm text-center mb-2 text-white'>Contatamente por aqui</h2>
        <div className="flex justify-center align-center space-x-4 ">


          <div className="flex items-center justify-center">
            <MdOutlineMarkEmailRead />
            <p className="ml-2">William-Champion@outlook.com</p>
          </div>


        </div>
      </div>
      <div className="bg-slate-600 p-5">
      </div>

    </div>
  )
}