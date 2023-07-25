/* eslint-disable react/prop-types */
import PostPreview from "./post-preview";

type Props = {
  posts: any;
};

const MoreStories: React.FC<Props> = ({ posts }) => {
  return (
    <section>
      <h2 className='text-white mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-center '>
        More Stories
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-32 mt-[72px]'>
        {posts.map((post: any) => (
          <PostPreview
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
