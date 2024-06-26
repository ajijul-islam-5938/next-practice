import PostCard from '@/components/postcard/PostCard';
import React from 'react';


export const metadata = {
    title:"Posts",
    description: "Generated by create next app",
  };
  

const fetchData = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    return data
}

const page = async () => {
    const posts = await fetchData();
    
    return (
        <div className='grid md:grid-cols-4 gap-5'>
            {
                posts.slice(0,30)?.map((post,index)=> <PostCard key={index} post={post}/>)
            }
        </div>
    );
};

export default page;