/* eslint-disable react/prop-types */
import Link from "next/link";
import CoverImage from "./cover-image";
import Date from "./date";
import Avatar from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  slug: string;
  date: string;
  excerpt: string;
  author: Author;
};

type Author = {
  name: string;
  picture: string;
};

const HeroPost: React.FC<Props> = ({
  title,
  coverImage,
  slug,
  date,
  excerpt,
  author,
}) => {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <div className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link href={`/posts/${slug}`}>
              <a className='hover:underline'>{title}</a>
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            {date && <Date dateString={date} />}
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
