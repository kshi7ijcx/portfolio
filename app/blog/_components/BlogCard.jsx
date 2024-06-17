'use client'
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const BlogCard = ({ item,filterFxn }) => {
  return (
    <Card className="flex items-center px-6 max-md:px-1 py-1 h-24"> 
      <div className="w-32 max-md:hidden">
        <Image
          src={item.mainImage.asset.url}
          width={100}
          height={100}
          alt="Blog Post Image"
          className="rounded-lg"
        />
      </div>
      <div>
        <CardHeader className="px-4 py-0 h-12">
          <CardTitle className="text-lg max-md:text-base"><Link href={`/blog/${item.slug.current}`} className="hover:underline" target="_blank">{item.title}</Link></CardTitle>
          <CardDescription className="text-xs max-md:text-[10px]">
            {format(item.publishedAt, "eeee")}{" "}
            {format(item.publishedAt, "dd.MM.yyyy")}
          </CardDescription>
        </CardHeader>
        <CardFooter className="px-4 py-2 text-xs space-x-2">
          {item.categories && item.categories.map((cat,index)=>(<p className="text-xs text-neutral-300 underline underline-offset-2 max-md:text-[10px]" key={index} onClick={()=>filterFxn(cat.title)}>{cat.title}</p>))}
        </CardFooter>
      </div>
    </Card>
  );
};
export default BlogCard;
