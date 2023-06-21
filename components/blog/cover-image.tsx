import { urlForImage } from "@libs/sanity";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  image: any;
};

// eslint-disable-next-line react/prop-types
const CoverImage: React.FC<Props> = ({ title, slug, image: source }) => {
  const image = source ? (
    <Image
      width={2000}
      height={800}
      alt={`Cover Image for ${title}`}
      src={urlForImage(source).height(800).width(2000).url() as string}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
