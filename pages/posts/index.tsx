/* eslint-disable @typescript-eslint/no-unused-vars */
import client from "@libs/sanity";

import Container from "@components/container";
import { allPostsQuery } from "@libs/queries";
import { GetStaticProps } from "next";
import PostCard from "@components/blog/post-card";
import Head from "next/head";

const Posts = (props: any) => {
  const { allPosts } = props;

  return (
    <>
      <Head>
        <title>
          Blogs | Learn More About Remote Work Culture with AppExert
        </title>
        <meta
          name='description'
          content='AppExert enable flexible work, now with advanced solutions. We have the expertise & solutions to help any business plan & execute Remote Working.'
        />
        <meta
          name='keywords'
          content='blogs, remote jobs, work from anywhere, appexert blogs, appexert posts'
        />
      </Head>
      <Container className='px-8 md:py-[100px] py-[20px]'>
        <p className='green-label text-center'>OUR BLOG</p>
        <h1 className='hero-heading md:text-[48px] text-[32px] pt-2 text-center'>
          Stories and interviews
        </h1>
        <p className='text-gray-400 text-[20px] pt-2 pb-[100px] md:max-w-3xl mx-auto text-center'>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates..
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]'>
          {allPosts &&
            allPosts.length > 0 &&
            allPosts.map((post: any) => (
              <div key={post.slug}>
                <PostCard post={post} />
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const allPosts = await client.fetch(allPostsQuery);
  return {
    props: {
      allPosts: allPosts,
      preview,
    },
    revalidate: 10,
  };
};

export default Posts;
