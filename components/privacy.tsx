const Privacy = () => {
  return (
    <div className=' flex flex-col justify-center items-center '>
      <div className='flex flex-col max-w-[800px] md:gap-[48px] gap-[30px] '>
        <p className='landing-para'>
          AppExert Labs OPC Pvt Ltd operates appexert.com, and this page
          apprises you about the policies regarding the collection, use, and
          publishing of personal data that is received from the users of this
          site. The clients referred to, on this page are the users who seek
          help on this site. The Mentors mentioned here are the experts who
          provide services to the clients or those who make content available on
          the site. By using this site, you agree to the terms and conditions of
          collection and use of data as per this policy. Note that personal
          information is used only to improve the site and to provide the
          services.
        </p>

        <div className='flex flex-col gap-[24px]'>
          <h2 className='sub-heading '>Data Collection</h2>
          <div>
            <h4 className='min-heading  pb-[12px] '>Information you provide</h4>
            <p className='landing-para'>
              The data that is given by you by performing actions like creating
              an account, adding your profile, or completing payment is used to
              identify or contact you. It includes and is not limited to your
              name, profile photo, email address, and payment information. We
              may also make use of the non-identifying data like the timezone,
              language, expertise, and more, which is part of the additional
              profile information.
            </p>
          </div>
          <div>
            <h2 className='min-heading  pb-[12px] '>
              Information collected automatically
            </h2>
            <p className='landing-para'>
              Apart from the information you provide, as mentioned above, we
              also collect data when you use our platform. It can be useful
              information like the interactions done on the platform like
              viewing pages, posts liked, etc. Data from your browser is also
              collected when you visit our site. This data includes computer IP,
              browser type, pages on the site, time and date of visit, time
              spent, and other stats. We also use cookies to collect data. The
              user has the option to refuse or limit the data sent through
              cookies. If you do not accept cookies, certain sections of the
              site may not be visible.
            </p>
          </div>
          <div>
            <h2 className='min-heading  pb-[12px] '>
              Information collected from Third Parties
            </h2>

            <p className='landing-para'>
              If you log in or connect to your account with a third-party
              service like Twitter, Google, etc., they may send personal data
              like your email and profile information from that service. The
              data that is sent to us via that service is dependent on your
              privacy settings and not controlled by us.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[24px]'>
          <h2 className='sub-heading '>Usage of Personal Information </h2>
          <div>
            <h4 className='min-heading  pb-[12px] '>We use it </h4>
            <ul className='landing-para pl-4'>
              <li>To send emails and other notifications to you.</li>
              <li>
                We may have to share your personal data if required by the law,
                legal process, or regulation.
              </li>
              <li>
                The data you provide may be used to develop, maintain or improve
                the website or the services.
              </li>
              <li>
                We may use the data to answer queries about your account for
                billing or other administrative purposes.
              </li>
              <li>
                To display success stories or testimonials after receiving
                permission from the users.
              </li>
              <li>To prevent security issues and investigate any breaches.</li>
              <li>
                For sending targeted promotional or marketing messages to
                promote our services.
              </li>
              <li>For the purpose of data analytics.</li>
            </ul>
          </div>
          <div>
            <h4 className='min-heading  pb-[12px]'>
              To Third-Party Services
            </h4>

            <p className='landing-para'>
              Some of your personal information may be disclosed to our service
              providers or advertising partners.
            </p>
          </div>
          <div>
            <h4 className='min-heading  pb-[12px]  '>
              Data storage and security
            </h4>

            <p className='landing-para'>
              Access to our website is secure, and your personal information is
              locked and secured by strong passwords. However, by using our
              website, you are hereby providing the authority to store, transfer
              or use information in the countries we operate. While we strive to
              protect your personal information, its security is not an absolute
              guarantee as no method of transmission over the internet or
              electronic storage is completely secure.
            </p>
          </div>
          <div>
            <h4 className='min-heading  pb-[12px]  '>
              Update or deletion of your personal information
            </h4>

            <p className='landing-para'>
              The users can update or delete the profile information from our
              website. When you delete your account, we remove all your personal
              data after a period of time as mandated by the law. However, the
              users may be unable to delete information if there is something
              pending like payments, disputes, jobs, etc.
            </p>
          </div>
          <div>
            <h4 className='min-heading  pb-[12px]  '>
              Editing of Privacy Policy
            </h4>

            <p className='landing-para'>
              The Privacy Policy may be updated as required, and the changes
              will be noticed on the site. The users are requested to review
              this page for any updates periodically. Contact our support team
              for any questions about the Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
