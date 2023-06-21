/* eslint-disable @typescript-eslint/no-unused-vars */
import client from "@libs/sanity";

import Container from "@components/container";
import { allPostsQuery } from "@libs/queries";
import { GetStaticProps } from "next";
import PostCard from "@components/blog/post-card";
import Head from "next/head";

const Posts = (props: any) => {
  const { allPosts, preview } = props;

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
      <Container className='mt-6'>
        <div className='section-heading pb-4'>Recent Blog Posts</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
