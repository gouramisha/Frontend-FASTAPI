//frontend/src/components/CreatePost.jsx

import { useState } from "react";
import { createPost } from "../api";

export default function CreatePost(){

const [content,setContent]=useState("")

const submit=()=>{
createPost({content})
}

return(
<div>

<textarea
value={content}
onChange={(e)=>setContent(e.target.value)}
/>

<button onClick={submit}>Post</button>

</div>
)

}