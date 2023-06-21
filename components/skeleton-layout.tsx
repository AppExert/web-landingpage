/* eslint-disable react/prop-types */
import { Card, Col, Skeleton, Space } from "antd";
import { useEffect, useState } from "react";

type Props = {
  layoutName?: string;
};

const SkeletonLayout: React.FC<Props> = ({ ...props }) => {
  const [layoutProps, setLayoutProps] = useState(props.layoutName);

  useEffect(() => {
    setLayoutProps(props.layoutName);
  }, [props]);

  const cardLayout = (
    <Col xs={24} md={8} className="">
      <Card
        className="min-h-[17.5rem]  p-2 m-1 cursor-pointer max-w-full"  
        hoverable      
      >
        <div className="flex gap-5 py-3">
          <Skeleton.Image className="w-[100px] h-[100px] rounded-md" active />
          <Skeleton paragraph={{ rows: 2 }} className="py-2" />
        </div>       
        <Space className="flex flex-wrap gap-12 mt-2">
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          
        </Space>
        <Skeleton.Input className="pb-2 w-full mt-2" size="small"  />
        <Space className="flex flex-wrap mt-2 ">
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          <Skeleton.Button active shape="default" size="small"  className="w-20" block />
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          
        </Space>
        <Space className="flex flex-wrap mt-2">
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          <Skeleton.Button active shape="default" size="small" className="w-20" block />
          
        </Space>
      </Card>
    </Col>
  );

  const infoLayout = (
    <Col xs={24} md={24} className="">
      <Card
        className="min-h-[30vh]  p-2 cursor-pointer max-w-full mb-2"
        hoverable
      >
        <Skeleton active={true} paragraph={{ rows: 2 }} className="mt-6" />
        <br />
        <Skeleton paragraph={{ rows: 4 }} className="mt-6" />
        <br />
      </Card>
    </Col>
  );

  const simpleLayout = (
    <Col xs={24} md={24} className="">
      <Card className=" p-2 cursor-pointer max-w-full " hoverable>
        <Skeleton active={true} paragraph={{ rows: 2 }} className="my-6" />
      </Card>
    </Col>
  );

  const listLayout = (
    <Col xs={24} md={24} className="">
      <Card
        className="min-h-[1.5rem]  p-2 cursor-pointer max-w-full mb-2"
        hoverable
      >
        <Skeleton avatar active={true} paragraph={{ rows: 1 }} />
      </Card>
    </Col>
  );

  const bigListLayout = (
    
    <Col xs={24} md={24} className=" lg:w-[900px] ">
      <Card
        className="min-h-[1.5rem]  p-2 cursor-pointer max-w-full mb-2"
        hoverable
      >
        <div className="flex gap-5 py-3">
          <Skeleton.Image className="w-[100px] h-[100px] rounded-md" active />
          <Skeleton paragraph={{ rows: 2 }} className="py-2" />
        </div>
        <Skeleton.Input className="pb-2 w-full"  size="small" />
        <Space className="flex flex-wrap py-2 ">
          <Skeleton.Button active shape="default" size="small" block />
          <Skeleton.Button active shape="default" size="small" block />
          <Skeleton.Button active shape="default" size="small" block />
          <Skeleton.Button active shape="default" size="small" block />
        </Space>
      </Card>
    </Col>
  );

  const profileLayout = (
    <Col xs={24} md={24} className="">
      <Card
        className="min-h-[100vh]  p-4 cursor-pointer max-w-full mb-2 border-none"
        
      >
        <div className="flex gap-5">
          <Skeleton.Image className="w-[128px] h-[128px] rounded-md" active />
          <Skeleton paragraph={{ rows: 2 }} />
        </div>
       
        <br />
        <Skeleton paragraph={{ rows: 4 }} className="mt-6" />
        <br />

        <Skeleton paragraph={{ rows: 4 }} className="mt-6" />

        <Skeleton paragraph={{ rows: 4 }} className="my-6" />
        <Space className="flex flex-wrap ">
          <Skeleton.Button active shape="default" size="small"  block />
          <Skeleton.Button active shape="default" size="small" block />
          <Skeleton.Button active shape="default" size="small"  block />
          <Skeleton.Button active shape="default" size="small" block />
          <Skeleton.Button active shape="default" size="small"  block />
          <Skeleton.Button active shape="default" size="small" block />
          <Skeleton.Button active shape="default" size="small"  block />
          <Skeleton.Button active shape="default" size="small" block />
        </Space>

        <div className="md:grid gap-4 grid-cols-2 pb-4 flex flex-col mt-8 ">
          <Skeleton active={true} paragraph={{ rows: 3 }} />
          <Skeleton active={true} paragraph={{ rows: 3 }} />
        </div>
      </Card>
    </Col>
  );
  const selectSkillLayout = (
    <div className="flex flex-wrap gap-4 sm:gap-y-4 md:m-0 m-4">
      <Space>
        <Skeleton.Input active={true} size="small" />
        <Skeleton.Button active={true} shape={"default"} block={true} size="small" />
        <Skeleton.Button active={true} shape={"default"} block={true} size="small" />
        <Skeleton.Button active={true} shape={"default"} block={true} size="small"/>
      </Space>
      <Skeleton.Button active={true} block={true} />
      <div className="flex flex-wrap md:m-0 m-4">
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-36 h-24 mr-4 mb-4 rounded-md"
        />
      </div>
    </div>
  );
  const companySelectSkillLayout = (
    <>
      <div className="flex flex-wrap gap-4 sm:gap-y-4 ">
        <Space>
          <Skeleton.Input active={true} size="small"/>
          <Skeleton.Button active={true} shape={"default"} block={true} size="small"/>
          <Skeleton.Button active={true} shape={"default"} block={true} size="small"/>
          <div className="flex flex-wrap gap-4 sm:gap-y-4 invisible md:visible">
            <Skeleton.Button active={true} shape={"default"} size="small"/>
            <Skeleton.Button active={true} shape={"default"} size="small"/>
            <Skeleton.Button active={true} shape={"default"} size="small"/>
          </div>
        </Space>
        <Skeleton.Button active={true} block={true} />

        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
        <Skeleton.Image
          active={true}
          className="w-40 h-16 mr-2 mb-4 rounded-md"
        />
      </div>
    </>
  );
  const hiringSkills = (
    <>
      {[...Array(20)].map((item) => (
        <Skeleton.Image key={item}
          active={true}
          className="flex justify-center flex-col items-center gap-2 border-2 text-center m-auto w-full px-2 py-4 hover:text-gray-600 hover:shadow-lg duration-200 rounded-md cursor-pointer h-full"
        />
      ))}
    </>
  );

  return (
    <>
      {props && (
        <>
          {layoutProps === "cardLayout" && cardLayout}
          {layoutProps === "listLayout" && listLayout}
          {layoutProps === "bigListLayout" && bigListLayout}
          {layoutProps === "profileLayout" && profileLayout}
          {layoutProps === "infoLayout" && infoLayout}
          {layoutProps === "simpleLayout" && simpleLayout}
          {layoutProps === "selectSkillLayout" && selectSkillLayout}
          {layoutProps === "companySelectSkillLayout" &&
            companySelectSkillLayout}
          {layoutProps === "hiringSkills" && hiringSkills}
        </>
      )}
    </>
  );
};

export default SkeletonLayout;
