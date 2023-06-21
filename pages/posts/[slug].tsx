import Container from "@components/container";
import PostHeader from "@components/blog/post-header";
import SectionSeparator from "@components/section-separator";
import { postQuery, postSlugsQuery } from "@libs/queries";
import client, {
  urlForImage,
  usePreviewSubscription,
} from "@libs/sanity";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import PostTitle from "@components/blog/post-title";
import MoreStories from "@components/blog/more-stories";
import PostBody from "@components/blog/post-body";

const Post = ({ data = {}, preview }: any) => {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className='md:max-w-2xl xl:max-w-4xl mx-auto'>
            <Head>
              <title>{post?.metaTitle || post?.title}</title>
              <meta
                name='description'
                content={post?.metaDescription || post?.excerpt}
              />
              {post.mainImage && (
                <meta
                  key='ogImage'
                  property='og:image'
                  content={
                    urlForImage(post.mainImage)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url() as string
                  }
                />
              )}
            </Head>
            <PostHeader
              slug={post.slug}
              title={post.title}
              coverImage={post.mainImage}
              date={post.publishedAt}
              author={post.author}
              estimatedReadingTime={post.estimatedReadingTime}
            />
            {post.body && <PostBody body={post.body} />}
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { post, morePosts } = await client.fetch(postQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts,
      },
    },
    revalidate: 10,
  };
};
export default Post;

export async function getStaticPaths() {
  const paths = await client.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}
