import { NextResponse } from "next/server";

const isLoggedin = false ;
const middleware = (request) => {

//  console.log('this is middleware 2')
if (!isLoggedin) {

  return NextResponse.redirect(new URL ('/home',request.url))
}

}

export default middleware;


export const config = {
  matcher: ['/about/:path*']
}
