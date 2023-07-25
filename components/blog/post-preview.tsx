/* eslint-disable react/prop-types */
import { urlForImage } from "@libs/sanity";
import { Post } from "@models/post.model";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";
import Avatar from "./avatar";
import Date from "./date";

type Props = {
  post: Post;
};

const PostPreview: React.FC<Props> = ({ post }) => {

  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div
          className='bg-[#09071B] rounded-lg border-solid border-1 border-[#18171C] cursor-pointer'
          style={{ height: "420px" }}
        >
          <Image
            width={400}
            height={200}
            alt={`Cover Image for ${post.title}`}
            src={
              urlForImage(post.mainImage).height(200).width(400).url() as string
            }
            className={cn("shadow-small bg-gray-300", {
              "hover:shadow-medium transition-shadow duration-200 rounded-t-lg": post.slug,
            })}
          />
          <div className='flex flex-col items-stretch h-[50%] justify-between p-4'>
            <p className='text-[#0FAC98] mt-2 text-[14px]'>
              <span>{post.estimatedReadingTime}</span> min read
            </p>
            <h3 className='text-[22px] font-semibold text-white'>
              {post.title}
            </h3>
            <div className='flex mt-2'>
              {<Avatar name={""} picture={post.author.image} />}
              <div className='flex flex-col text-white text-[] font-semibold'>
                {post?.author?.name || "N.A"}
                <div className="text-[#908E9F] text-[14px] font-normal">
                  <Date dateString={post.publishedAt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
