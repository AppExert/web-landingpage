import { urlForImage } from "@libs/sanity";
import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

// eslint-disable-next-line react/prop-types
const Avatar: React.FC<Props> = ({ name, picture }) => {
  return (
    <div className='flex items-center'>
      <div className='w-8 h-8 relative mr-4'>
        {picture && (
          <Image
            src={
              urlForImage(picture)
                .height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
            layout='fill'
            className='rounded-full'
            alt={name}
          />
        )}
      </div>
      {name && (
        <>
          <div className='text-sm'>by <span className="font-semibold">{name}</span></div>
        </>
      )}
    </div>
  );
};

export default Avatar;
