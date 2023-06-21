/* eslint-disable react/prop-types */
import { Button } from "antd";
import cn from "classnames";
import Link from "next/link";

type Props = {
  primary: boolean;
  title: string;
  buttonText: string;
  buttonLink: string;
  items: JSX.Element[];
};

const ComparisionCard: React.FC<Props> = ({
  primary,
  title,
  buttonLink,
  buttonText,
  items,
}) => {
  return (
    <div
      className={cn("w-full bg-light-gray rounded-md overflow-hidden mt-4 drop-shadow-md", {
        "border-brand-700 border": primary,
      })}
    >
      <div className='p-4 '>
        <h4
          className={cn("text-xl pb-6 text-left font-semibold", {
            "text-brand-700": primary,
          })}
        >
          {title}
        </h4>
        <div className='flex flex-col gap-4'>
          {items.map((item, idx) => {
            return item ? <div key={idx}>{item}</div> : <div key={idx}>*</div>;
          })}
        </div>
      </div>

      {primary && (
        <Link href={buttonLink || "/"}>
          <a>
            <Button className='bg-brand-700 h-12 w-full text-white border-0 rounded-t-none text-lg'>
              {buttonText}
            </Button>
          </a>
        </Link>
      )}
    </div>
  );
};

export default ComparisionCard;
