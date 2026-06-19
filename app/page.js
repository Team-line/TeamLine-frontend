import { ThemeButton } from "@/components/ThemeButton";
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/HeroSection'
import { StrongTools } from '@/components/StrongTools'
import { YourJuorny } from '@/components/YourJuorny'
import { Quastions } from '@/components/Quastions'
import { ReadyToStart } from '@/components/ReadyToStart'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar /> 
      
      <div id="home">
        <HeroSection />
      </div>

      <div id="features">
        <StrongTools />
      </div>

      <div id="about">
        <YourJuorny />
      </div>

      <Quastions />
      <ReadyToStart />

      <div id="contact">
        <Footer />
      </div>
      
    </>
  );
}