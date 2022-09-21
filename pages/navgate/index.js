import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Nav() {
  const route = useRouter()

  const handel_cli  = () =>{
    // route.push("/product")
    route.replace("/product")
  }

  return (
    <div>
      <h1> wellcome to doc about nav</h1>
      <br />
      <Link href="/">home</Link>
      <br />
      <Link href="/product">poduct</Link>
      <br />
      <Link href="/product/1">poduct 1</Link>
      <br />
      <Link href="/product/1/review">poduct 1 all review </Link>
      <br />
      <Link href="/product/1/review/best ting">poduct 1 all review 1 </Link>
      <br />

      programatically route
      <br />
      
      <button onClick={()=>handel_cli()}> product </button>

    </div>
  );
}

export default Nav;
