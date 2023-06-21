import { Button } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          AppExert | Build Your Products Faster & Better with Remote Teams
        </title>
        <meta
          name='description'
          content='Building products with Remote Developers is easier with AppExert. Our team of hand-picked Remote Team helps you execute critical projects successfully'
        />
        <meta
          name='keywords'
          content='hire engineers, remote developers, work from home, build remote team, appexert'
        />
        <meta name='author' content='Appexert' />
        <meta name='doc-type' content='Web Page' />
        <meta name='copyright' content='https://appexert.com/' />
        <meta name='robots' content='index, follow' />
        <meta name='distribution' content='Global' />
        <meta name='publisher' content='Appexert' />
        <meta
          name='classification'
          content='hire developers, manage remote team, managed remote developers, start hiring, hire developers, appexert'
        />
      </Head>

      <div className=' flex flex-col items-center justify-center  p-2 mt-10'>
        <Image
          width={150}
          height={150}
          src='/images/gif/review.gif'
          alt='appexert logo'
        />
        <h1 className='text-2xl font-bold text-gray-700 mb-6'>
          You&apos;re all set! We are excited to discuss your needs.
        </h1>
        <p className=' px-3 p-2 text-white  rounded bg-gray-700 '>
          Keep an eye on your email inbox, our team will get in touch within 4
          working hours.
        </p>
        <Button className='btn btn-brand mt-5' type='default'>
          <Link href={"/"}>Go to home</Link>
        </Button>
      </div>
    </>
  );
}
