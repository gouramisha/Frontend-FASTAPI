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
<h1>Fast API</h1>

{posts.map(p=>(
<div key={p.id}>
<p>{p.content}</p>
</div>
))}

</div>
)

}