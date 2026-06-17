
import { NextResponse } from "next/server"

export default function middleware(request) {
      // const token = request.cookies.get("token");
      const token='fsfsf'

      if(!token){
            return NextResponse.redirect(new URL("/Login",request.url))
      }

      return NextResponse.next()

}

export const config={
      matcher:['/dashboard/:path*']
}


