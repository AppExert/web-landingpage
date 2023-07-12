/* eslint-disable react/prop-types */
import PostPreview from "./post-preview";

type Props = {
  posts: any;
};

const MoreStories: React.FC<Props> = ({ posts }) => {
  return (
    <section>
      <h2 className='text-white mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Stories
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-32'>
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
