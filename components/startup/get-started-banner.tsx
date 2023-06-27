import Container from "@components/container";
import { Button } from "antd";
import Link from "next/link";

const GetStartedBanner = () => {
  const startHire = `${process.env.NEXT_PUBLIC_HIRE_APP}/companies/start-hiring?step=1`;
  return (
    <section className='start-hiring py-8 '>
      <Container>
        <div className='text-center items-center md:flex-row justify-center'>
          <div>
            <p className='mt-2 '>
              Hey founders! Let’s build you an awesome team of remote engineers.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <Link href={startHire}>
              <Button
                type='primary'
                className='btn-brand mt-4 px-8'
                size='large'
              >
                Let’s discuss your startup needs
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStartedBanner;
