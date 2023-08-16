import { urlForImage } from "@libs/sanity";
import Image from "next/image";

type Props = {
  name: string;
  picture: string;
  classname: string;
};

// eslint-disable-next-line react/prop-types
const Avatar: React.FC<Props> = ({ name, picture, classname }) => {
  return (
    <div className='flex items-center'>
      <div className={`relative mr-4 ${classname}`}>
        {picture && (
          <Image
            src={
              urlForImage(picture)
                .height(40)
                .width(40)
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
