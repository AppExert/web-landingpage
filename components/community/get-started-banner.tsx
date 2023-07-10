import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@components/container";
import Fieldset from "@components/fieldset";
import { registerInvite } from "@services/community.service";
import { message, Button, Input } from "antd";
import { Form, Formik } from "formik";

const handleSubmit = async (event: any) => {

  const emailValidated = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.email);

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
}

const GetStartedBanner = () => {
  return (
    <div className="flex  flex-col md:gap-[20px] justify-between p-[30px] md:py-[72px] md:px-[100px] border-[1px] border-[#43424D] rounded-[12px] items-center"
      style={{
        background:
        "linear-gradient(135deg, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)",
        backdropFilter: "blur(12px)"
      }}
    >
      <h1 className="heading text-center  pt-2 pb-4 md:pb-0 md:max-w-[800px]">Excited to be part of our thriving remote developer community?</h1>
    
      <div className='flex text-center '>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input.Group compact  className="flex justify-center  items-center">
              <Fieldset
                type='email'
                placeholder='Add your email to get early access'
                name='email'
                id='email'
                className=' py-[9px] placeholder-gray-400 text-gray-700  bg-light-gray rounded-l-md mr-16 '
                required />

              <Button
                type='primary'
                className='btn-brand  rounded-l-none  p-0 px-4 mt-[-16px] ml-[-15px]'
                size='large'
                htmlType='submit'
              >
                <ArrowRightOutlined
                  className=''
                  style={{ fontSize: "1.2rem", }}
                />
              </Button>
            </Input.Group>
          </Form>
        </Formik>
      </div>

    </div>

     
  );
};

export default GetStartedBanner;
