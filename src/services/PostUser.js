import apiEndPoint from "../apiEndPoint";

const PostUser=async (data)=>{
    const res=await fetch('http://localhost:3000/api/users', {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
    });
    const result=await res.json();
    return result;
}
export default PostUser