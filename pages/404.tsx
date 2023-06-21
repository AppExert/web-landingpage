import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="relative max-w-lg w-72 h-72 m-auto">
        <Image
          layout="fill"
          src="/images/not_found.svg"
          alt="not found illustration"
        />
      </div>
      <h2 className="text-center text-brand-500 text-2xl max-w-lg m-auto font-bold">
        {" Oh no! We couldn't find what you were looking for. Please check the URL"}
      </h2>
    </>
  );
};
export default NotFound;
