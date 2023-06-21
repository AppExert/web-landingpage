import Image from "next/image";
import { useEffect, useState } from "react";
interface Props {
  src: string;
  id: string;
  width: string;
  height: string;
}

export default function SkillsImage({ src, ...props }: Props) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      src='/images/issuerLogo/defaultskills.svg'
      width={props.width}
      height={props.height}
      alt={`${props.id} logo`}
      onLoadingComplete={(result: any) => {
        if (result.naturalWidth === 0) {
          console.log(imgSrc);
          set_imgSrc("/images/issuerLogo/defaultskills.svg");
        }
      }}
      onError={() => {
        set_imgSrc("/images/issuerLogo/defaultskills.svg");
      }}
    />
  );
}
