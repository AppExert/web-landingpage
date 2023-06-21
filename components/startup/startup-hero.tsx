import Container from "@components/container";
import { Button } from "antd";
import Link from "next/link";

const StartupHero = () => {
  return (
    <section className='pt-28 '>
      <Container>
        <div className='text-center pb-8'>
          <p className='section-preheading pb-2 '>{"Start Scale Succeed"}</p>
          <div className='hero-heading inline relative'>
            Fueling Your Startup for Growth
          </div>
          <p className='section-preheading pt-2 md:px-10 '>
            Whether you are taking your first step or looking to scale your
            team, <br />
            we are ready with our team of rockstar remote engineers to help your
            startup grow and elevate it to the next level.
          </p>
        </div>
        <div className='text-center pb-8 flex justify-center items-center'>
          <Link href='/'>
            <Button type='primary' className='btn-brand px-8 ' size='large'>
              Hire Developers
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default StartupHero;
