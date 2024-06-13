import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { redirect } from "next/navigation";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    title: {
      absolute: `${post.title}`,
    },
    description: `${post.body}`,
    keywords : `${post.body.split(" ")}`
  };
};
 const user = true;

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  if(!user){
    redirect("/posts")
  }
  return data;
};

const page = async ({ params }) => {
  const posts = await fetchData();
  const validPost = await posts?.slice(0, 30);
  const { title, body } = validPost.find(post => post.id == params.id);

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start space-y-3">
        <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
        <small className="text-white/90 font-medium text-xl ">{body}</small>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-5.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night sleep.</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default page;
