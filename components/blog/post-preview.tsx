/* eslint-disable react/prop-types */
import Link from "next/link";
import CoverImage from "./cover-image";
import Date from "./date";
import Avatar from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
};

const PostPreview: React.FC<Props> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <div>
      <div className='mb-5'>
        {coverImage && (
          <CoverImage slug={slug} title={title} image={coverImage} />
        )}
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link href={`/posts/${slug}`}>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>{date && <Date dateString={date} />}</div>
      {excerpt && <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.image} />}
    </div>
  );
};

export default PostPreview;
