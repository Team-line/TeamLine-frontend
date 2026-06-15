import { SideBar } from "./components/SideBar";
import {Header} from "./components/Header";



export default function  DashboardLayout({children}){
      return(
            <div className="flex">
                  <SideBar/>
                  <div className="min-h-dvh flex flex-col w-full">
                        <Header/>

                        <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-950 w-full">
                              {children}
                        </main>
                  </div>
            </div>
      )
}