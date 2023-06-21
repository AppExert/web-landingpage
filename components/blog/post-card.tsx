/* eslint-disable react/prop-types */
import { urlForImage } from "@libs/sanity";
import { Post } from "@models/post.model";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div
          className='rounded-md shadow-md hover:shadow-lg border-gray-200 hover:border-gray-400 transition duration-200 cursor-pointer'
          style={{ height: "350px" }}
        >
          <Image
            width={400}
            height={200}
            alt={`Cover Image for ${post.title}`}
            src={
              urlForImage(post.mainImage).height(200).width(400).url() as string
            }
            className={cn("shadow-small bg-gray-300", {
              "hover:shadow-medium transition-shadow duration-200": post.slug,
            })}
          />
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-gray-600'>
              {post.title}
            </h3>
            <p className='mt-2'>
              by{" "}
              <span className='font-semibold'>
                {post?.author?.name || "N.A"}
              </span>
            </p>

            <p className="mt-2">
              <span>{post.estimatedReadingTime}</span>{" "}
              min read
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
