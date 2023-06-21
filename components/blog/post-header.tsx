/* eslint-disable react/prop-types */
import Date from "./date";
import Avatar from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: any;
  slug: string;
  estimatedReadingTime: number;
};

const PostHeader: React.FC<Props> = ({
  title,
  date,
  estimatedReadingTime,
  author,
}) => {
  return (
    <>
      {/* <div className='my-4 sm:mx-0'>
        {coverImage && (
          <CoverImage slug={slug} title={title} image={coverImage} />
        )}
      </div> */}
      <div className='mt-4 text-3xl section-heading text-gray-700 font-semibold'>
        {title}
      </div>
      <div className='mt-2 flex flex-col md:flex-row md:gap-4 justify-center md:justify-start'>
        {author && <Avatar name={author.name} picture={author.image} />}
        <div className='flex items-center pl-10 md:pl-0 gap-4 text-xs md:text-sm'>
          <Date dateString={date} />
          {estimatedReadingTime && (
            <div className='pl-2 text-gray-600'>
              {estimatedReadingTime} min read
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
