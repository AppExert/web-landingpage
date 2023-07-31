/* eslint-disable react/prop-types */
import Avatar from "@components/blog/avatar";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "antd";
import { useEffect, useState } from "react";

type Props = {
  post: any;
};

const PostFooter: React.FC<Props> = ({ post }) => {
  const [buttonText, setButtonText] = useState("Copy Link");
  const router = useRouter();
  const [shareURL, setShareURL] = useState("");
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareURL(window.location.origin + "/posts/" + post.slug);
    }
  }, [post.slug]);

  
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
        {<div className="">
          <Avatar name={""} picture={post.author.image} classname='w-[56px] h-[56px]' />
        </div>
        }
        <div className='flex flex-col text-white font-semibold text-[18px]'>
          {post.author.name || "N.A"}
          <div className='text-[#908E9F] text-[16px] font-normal'>
            Associate software developer
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-[2px] mt-[16px] md:gap-[12px] md:mt-0'>
        <Button
          type='primary'
          onClick={copyToClipBoard}
          className='page-btn-copy text-[16px] gap-2 w-max'
        >
          <Image
            width={20}
            height={20}
            src={"/images/icon/copy.svg"}
            alt='Check icon'
          />
          {buttonText}
        </Button>
        <a href={`https://twitter.com/intent/tweet?text=${shareURL}`} target="_blank" rel="noreferrer">
          <Button
            type='primary'
            className='page-btn-social'
          >
            <Image
              width={20}
              height={20}
              src={"/images/icon/twitter-blog.svg"}
              alt='Check icon'
            />
          </Button>
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`} target="_blank" rel="noreferrer">
          <Button
            type='primary'
            className='page-btn-social'
          >
            <Image
              width={20}
              height={20}
              src={"/images/icon/facebook-blog.svg"}
              alt='Check icon'
            />
          </Button>
        </a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareURL}`} target="_blank" rel="noreferrer">
          <Button
            type='primary'
            className='page-btn-social'
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