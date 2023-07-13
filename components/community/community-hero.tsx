import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@components/container";
import Fieldset from "@components/fieldset";
import { registerInvite } from "@services/community.service";
import { message, Button, Input } from "antd";
import Link from "next/link";

const handleSubmit = async (event: any) => {
  const emailValidated =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      event.email
    );

  if (emailValidated) {
    const response = await registerInvite(event.email);
    const { data } = response;

    if (data.status === "success") {
      message.destroy();
      message.success("Thanks you! We will email you the next steps.");
    } else if (data.status === "error") {
      message.destroy();
      message.error(data.message);
    } else {
      message.destroy();
      message.error("Internal Server Error");
    }
  }
};

const CommunityHero = () => {
  return (
    <section className='py-28 '>
      <Container>
        <div className='text-center '>
          <div className='hero-heading '>Learn Together, Grow Faster</div>
          <p className='section-preheading pt-2'>
            Upskill, get peer reviews, share your experiences, build exciting
            projects with top developers around the world.
          </p>
        </div>
        <div className='flex gap-4 items-center z-40'>
          <Link
            href={`${process.env.NEXT_PUBLIC_HIRE_APP}/register?developers`}
          >
            <Button type='primary' className='page-btn'>
              View open positions
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CommunityHero;
