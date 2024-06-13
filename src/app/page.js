import Image from "next/image";


// const getTime = async ()=>{
//                                               // {next : {revalidate : 5}}
//   const res = await fetch("http://localhost:3000/time",{cache : "no-store"}); 
//   const data = await res.json();
//   return data.currentTime
// }
export default async function Home() {
  // const currentTime =await getTime()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Home Page
      
    </main>
  );
}
