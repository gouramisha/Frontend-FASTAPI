//frontend/src/pages/Home.jsx

import { useEffect, useState } from "react";

import { getPosts } from "../src/api";

export default function Home(){

const [posts,setPosts]=useState([])

useEffect(()=>{
getPosts().then(res=>setPosts(res.data))
},[])

return(
<div>
<Home/>

</div>
)

}