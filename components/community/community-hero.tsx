import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@components/container";
import Fieldset from "@components/fieldset";
import { registerInvite } from "@services/community.service";
import { message, Button, Input } from "antd";
import { Formik, Form } from "formik";

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
        <div className='text-center pt-10'>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <Input.Group compact>
                <Fieldset
                  type='email'
                  placeholder='Add your email to get early access'
                  name='email'
                  id='email'
                  className='py-[9px] placeholder-gray-400 text-gray-700  bg-light-gray rounded-l-md mr-16 '
                  required
                />

                <Button
                  type='primary'
                  className='btn-brand rounded-l-none inline-block p-0 px-4'
                  size='large'
                  htmlType='submit'
                >
                  <ArrowRightOutlined
                    className='mt-[2px]'
                    style={{ fontSize: "1.2rem", verticalAlign: "top" }}
                  />
                </Button>
              </Input.Group>
            </Form>
          </Formik>
        </div>
      </Container>
    </section>
  );
};

export default CommunityHero;
