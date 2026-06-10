import { ThemeButton } from "@/components/ThemeButton";
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div>home</div>
    <Link href={'/dashboard'}>Dashboard</Link>
    <ThemeButton />
    </>
  );
}
