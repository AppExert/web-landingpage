import Avatar from "@components/blog/avatar";
import { Post } from "@models/post.model";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "antd";
import { useState } from "react";

type Props = {
  post: Post;
};

const PostFooter: React.FC<Props> = ({ post }) => {
  const [buttonText, setButtonText] = useState("Copy Link");
  const router = useRouter();
  let ShareURL =  "https://appexert.com/posts/" + post.slug
  
  const copyToClipBoard = async () => {
    setButtonText("Copied");
    let url = post.slug;
    url = url.toLowerCase();
    
    if (url) {
      await navigator.clipboard.writeText(
        window.location.origin + router.basePath + "/posts/" + url
      );
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-between mt-2 mb-[100px]'>
      <div className='flex mt-2'>
        {<Avatar name={""} picture={post.author.image} />}
        <div className='flex flex-col text-white font-semibold'>
          {post?.author?.name || "N.A"}
          <div className='text-[#908E9F] text-[14px] font-normal'>
            Associate software developer
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-[2px] mt-[16px] md:gap-[12px] md:mt-0'>
        <Button
          type='primary'
          onClick={copyToClipBoard}
          className='page-btn-secondary gap-2 w-max'
        >
          <Image
            width={18}
            height={18}
            src={"/images/icon/copy.svg"}
            alt='Check icon'
          />
          {buttonText}
        </Button>
        <a href={`https://twitter.com/intent/tweet?text=${ShareURL}`} target="_blank">
          <Button
            type='primary'
            className='page-btn-secondary'
          >
            <Image
              width={20}
              height={20}
              src={"/images/icon/twitter-blog.svg"}
              alt='Check icon'
            />
          </Button>
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${copyToClipBoard}`} target="_blank">
          <Button
            type='primary'
            className='page-btn-secondary'
          >
            <Image
              width={20}
              height={20}
              src={"/images/icon/facebook-blog.svg"}
              alt='Check icon'
            />
          </Button>
        </a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${post.slug}`} target="_blank">
          <Button
            type='primary'
            className='page-btn-secondary'
          >
            <Image
              width={20}
              height={20}
              src={"/images/icon/linkedin-blog.svg"}
              alt='Check icon'
            />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PostFooter;
