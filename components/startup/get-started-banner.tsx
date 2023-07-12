import Container from "@components/container";
import { Button } from "antd";
import Link from "next/link";

const GetStartedBanner = () => {
  const startHire = `${process.env.NEXT_PUBLIC_HIRE_APP}/companies/start-hiring?step=1`;
  return (
    <div
      className="flex md:flex-row flex-col   justify-between p-[30px] md:py-[72px] md:px-[100px] border-[1px] border-[#43424D] rounded-[12px] "
      style={{
        background:
          "linear-gradient(135deg, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <h1 className="heading pt-2 pb-4 md:pb-0md:w-[560px]">
        Let&apos;s build you an awesome team of remote engineers.
      </h1>
      <Link href="/companies/start-hiring?step=1">
        <Button type="primary" className="page-btn-white">
          View open positions
        </Button>
      </Link>
    </div>
  );
};

export default GetStartedBanner;
