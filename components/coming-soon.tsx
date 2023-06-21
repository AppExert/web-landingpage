import Image from "next/image";

const ComingSoon = () => {
  return (
    <div>
      <div className="relative md:max-w-xl lg:max-w-xl m-auto text-center w-100">
        <Image
          width="400"
          height="400"
          src="/images/coming_soon.svg"
          alt="coming soon illustration"
        />
      </div>
      <h2 className="text-brand-500 text-4xl text-center mt-4 font-bold font-header">
        We are working on it!
      </h2>
    </div>
  );
};

export default ComingSoon;
