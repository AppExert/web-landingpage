import Container from "@components/container";
import cn from "classnames";
import { Collapse } from "antd";
import {
  useEffect,
  useState,
} from "react";

const { Panel } = Collapse;

const FAQCOMPANY: {
  question: string;
  answer: string;
}[] = [
  {
    question: "What is AppExert?",
    answer:
      "AppExert is an AI powered all in one platform to hire and manage top pre-vetted remote tech talent across the globe. It helps to spin up your dream software engineering team in a matter of a few weeks. Hiring from our remote talent pool of software developers is simple, secure, and compliant.",
  },
  {
    question: "Who is AppExert for?",
    answer:
      "Tired of fighting with tech giants in your city for top developers? Are you a startup/scale-up looking to make an impact but struggling with your limited capital/shorter run-way? We understand you like no one else! We have been in your shoes and thereby set out to make a huge difference in getting you stable high-performing remote engineering teams, extending your run-way at a super competitive price. We are absolutely flexible to work with. Be it competitive pricing, time zone management, compliance management, quality deliverables, etc. Our developers will be your cavalry and deliver future-proof solutions and stellar outcomes to meet your business goals.     ",
  },
  {
    question: "What is the cost to hire AppExert skilled developers?",
    answer:
      "You hire our teams top 10% untapped developers for a cost-effective and competitive price. Our price starts at 18$ per hour. AppExert provides developers with a zero-risk trial period. You are free to hire full-time or contract developers as your project demands. ",
  },
  {
    question:
      "How do we manage to work with developers across different time zones?",
    answer:
      "While our team is spread across the globe, we ensure to match at least 4 hours which overlaps your core work/business hours that meet your requirements and the competence to complete your project. In addition, we handle time tracking, admin support, payroll, and logistics making AppExert hiring easier for you.  ",
  },
  {
    question: "How do payments and invoicing work on AppExert?",
    answer:
      "Monthly invoices are automatically created at the end of every month in the platform. Payments can be made via Credit/Debit cards or Wire transfer. And yes, any extra time-offs are adjusted as you only pay for the time worked.  ",
  },
];

const FAQDEVELOPER: {
  question: string;
  answer: string | JSX.Element;
}[] = [
  {
    question: "Why should I join AppExert?",
    answer: (
      <>
        {" "}
        Because we are not just a company but a developer community. We are
        making great strides to build the most beloved remote developer
        community & talent marketplace in the world. We offer exciting
        opportunities for remote developers looking for full-time and long-term
        software engineering positions that promises career growth and
        attractive compensation. AppExert supports developers navigate through
        their careers with:
        <ul className='list-disc mt-2 ml-8 text-left'>
          <li>
            Long-term matching to high-quality remote development positions
          </li>
          <li>Support to work from anywhere in the world</li>
          <li>Personalized career mentoring</li>
          <li>24/7 support from our developer success team</li>
          <li>Regular and secure payments</li>
          <li>Access to a career-centric remote developer community</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What is the pre-qualification process for developers to join AppExert?",
    answer:
      "Passion for solving real-world problems through software and experience with programming is enough to join our world's smart network of remote developers. AppExert does consider skills and talent over academic qualifications and gives exceptionally talented candidates opportunities to prove their mettle.",
  },
  {
    question: "How AppExert is different from freelance platforms?",
    answer:
      "Most of the Freelance platforms focus on short-term contractual opportunities where developers (Freelancers) are on their own. Whereas, AppExert focuses on offering software developer jobs that are permanent and full-time in nature creating long-term, high-value engagements.",
  },
  {
    question:
      "How soon can I reattempt the technical challenge if I am disqualified for the first time?",
    answer:
      "You can reattempt the technical challenge after a span of 30 days.",
  },
  {
    question:
      "Will the salaries meet market standards even for remote employees?",
    answer:
      "Yes, we pay above-industry-average salaries and provide many additional benefits like Health Insurance, Employee Provident Fund, Flexible Working Environment, Paid Time Offs, Wellness, and Lifestyle Benefits, Internet Expenses, Home Office Set-up, Vacation Benefits, Maternity Offs, Referral Bonus, Awards & Rewards Program, Joining Bonus, Employee Advocacy Program, ESOPs, etc",
  },
  {
    question: "Can I work for AppExert even though I have a full-time job?",
    answer:
      "Yes, as long as you can commit 4 hours daily to the allocated projects.",
  },
  {
    question: "What type of opportunities can I access through AppExert?",
    answer:
      "AppExert offers Frontend Developer, Backend Developer, Full-Stack Developer, UI/UX Designer, Site Reliability Engineers, Cloud Security Engineers, Technical Architects, Engineering Managers, Agile Coaches, Product Managers, SDETs, QA Engineers, Technical Support Engineers and many more opportunities for skilled developers.",
  },
  {
    question:
      "Will I owe AppExert when I land on a project using the AppExert platform?",
    answer:
      "No, once you clear the technical challenge and interview process, we are eager to welcome and onboard you as AppExerters. We charge zero dollars from developers. Our platform is 100% free for developers.",
  },
  {
    question: "What type of companies hire through AppExert?",
    answer:
      "Appexert works with high-tech startups and companies spanned across the globe.",
  },
  {
    question: "How do I get matched with leading market jobs?",
    answer:
      "Depending on your technical skills, remote readiness, and soft skills, AppExert does a comprehensive evaluation and our matching engine will actively present your profile for multiple job opportunities that match your goals, skills, and experience level. Once it finds a perfect fit, our matching team will proactively reach out to you and hires the best talent for every project.",
  },
  {
    question: "What is it like to work with AppExert?",
    answer:
      "Working with AppExert is fun with a significant learning edge as every developer works on versatile projects across the globe on leading technologies. Our developers find us easy and fun to work with, as it is a work from anywhere opportunity and we focus on work-life balance.",
  },
];

const FrequentlyAskedQuestion = (props: any) => {
  const [localCuratedList, setLocalCuratedList] = useState<any>([]);
  useEffect(() => {
    let list: {
      question: string;
      answer: string | JSX.Element;
    }[] = [];

    switch (props.feature) {
    case "company":
      list = FAQCOMPANY;
      break;
    case "developer":
      list = FAQDEVELOPER;
      break;
    default:
      break;
    }

    setLocalCuratedList(list);
  }, [props.feature]);

  return (
    <section
      className={cn(" py-8 " + props.className)}
    >
      <Container>
        <div className='flex-row items-center justify-center md:mx-[10%] '>
          <div className='pt-4  pb-8'>
            {  localCuratedList.slice(0, !props.expand ? 5 : undefined).map(
              (
                faq: {
                  question: string;
                  answer: string | JSX.Element;
                },
                id: number
              ) => (
                <div className='text-[#E4E4E4] md:p-[24px] p-[16px]' key={id}>
                  <Collapse
                    destroyInactivePanel
                    expandIconPosition="end"
                    ghost
                    collapsible='header'                    
                    className="text-[#E4E4E4] bg-[#09071B]"
                    defaultActiveKey={props.expand ? 1 : 0 }
                  >
                    <Panel
                      header={ faq.question}
                      key='1'
                      className='font-semibold text-white text-[16px] md:text-[20px]'
                    >
                      <p className='font-normal text-[16px] cursor-pointer text-[#908E9F]'>
                        {faq.answer}
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FrequentlyAskedQuestion;
