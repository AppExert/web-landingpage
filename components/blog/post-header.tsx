/* eslint-disable react/prop-types */
import Date from "./date";

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
}) => {
  return (
    <>
      {/* <div className='my-4 sm:mx-0'>
        {coverImage && (
          <CoverImage slug={slug} title={title} image={coverImage} />
        )}
      </div> */}
      <div className='md:py-[100px] py-[20px]'>
        <div className='green-label text-center'>

          {estimatedReadingTime && (
            <div className='uppercase flex pl-2 justify-center'>
              {estimatedReadingTime} min read
              {" -"}
              <Date dateString={date} />
            </div>
          )}
        </div>
        <h1 className='hero-heading md:text-[48px] text-[32px] pt-2 text-center'>
          {title}
        </h1>
        <p className='text-gray-400 text-[20px] pt-2 md:max-w-3xl mx-auto text-center'>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates..
        </p>
      </div>
    </>
  );
};

export default PostHeader;
