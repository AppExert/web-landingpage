import Fieldset from "@components/fieldset";
import RadioFieldset from "@components/radio-fieldset";
import { Radio } from "antd";

const CompanyInfo = () => {
  return (
    <div className='pb-16 w-full'>
      <div className='flex flex-col '>
        <div className=''>
          <div className='md:w-1/2 text-gray-700'>
            <Fieldset size='large' name='name' label='Company name' />
          </div>
          <div className=' md:w-1/2 text-gray-700'>
            <Fieldset size='large' type='email' name='email' label='Email address' />
          </div>
        </div>  
        <div className=''>
          <RadioFieldset
            name='hiringNeeds'
            label='Your current hiring needs?'
            defaultValue='permanent-positions'
            size='large'
            className='companyPreSignup '
          >
            <Radio.Button value='permanent-positions'>Permanent Positions</Radio.Button>
            <Radio.Button value='contract-positions'>Contract Positions</Radio.Button>
          </RadioFieldset>
        </div>
        <div className='mt-4'>
          <RadioFieldset
            name='employees'
            label='Your employees count'
            defaultValue=' 1-50 '
            size='large'
            className='mt-2 flex-wrap sm:flex-row companyPreSignup'
          >
            <Radio.Button value='1-50'>1-50</Radio.Button>           
            <Radio.Button value='51-500'>51-500</Radio.Button>
            <Radio.Button value='501-1000'>501-1000</Radio.Button>
            <Radio.Button value='1001-10K'>1001-10k</Radio.Button>
            <Radio.Button value='>10K'>{">10k"}</Radio.Button>
          </RadioFieldset>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
