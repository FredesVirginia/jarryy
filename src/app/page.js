import Image from 'next/image'
import NavBar from '@/components/NavBar';
import Section1 from '@/components/Section1';
import Skrills from '@/components/Skrills';
import Proyect from '@/components/Proyect'
export default function Home() {
  return (
   <div>
      <NavBar />
      <Section1/>
      <Skrills/>
      <Proyect/>
   </div>
  )
}
