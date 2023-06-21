import Container from "@components/container";
import { Button } from "antd";
import Link from "next/link";

const GetStartedBanner = () => {
  return (
    <section className='start-hiring py-8  bg-light-gray '>
      <Container>
        <div className='text-center items-center md:flex-row justify-center'>
          <div>
            <h2 className='text-xl font-semibold '>
              Ready to get started with us?
            </h2>
            <p className='mt-2 '>
              Kickstart your journey with AppExert with a 100% risk-free 15-day
              trial
            </p>
          </div>
          <div className='md:pl-10 pl-0 flex items-center justify-center'>
            <Link href='/'>
              <Button
                type='primary'
                className='btn-brand px-8 mt-4 '
                size='large'
              >
                Hire Developers
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStartedBanner;
