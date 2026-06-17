import { ThemeButton } from "@/components/ThemeButton";
import Link from 'next/link'
import {NavBar}from '@/components/NavBar'
import {HeroSection}from '@/components/HeroSection'
import {WhyTeamLine}from '@/components/WhyTeamLine'

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <WhyTeamLine />
    </>
  );
}
