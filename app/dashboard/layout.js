import { SideBar } from "./components/SideBar";
import {Header} from "./components/Header";



export default function  DashboardLayout({children}){
      return(
            <div className="flex">
                  <SideBar/>
                  <div className="min-h-dvh flex flex-col w-full">
                        <Header/>
                        {children}
                  </div>
            </div>
      )
}