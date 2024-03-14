import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const Privacy = ({
  animationFromDb,
  moviesFromDb,
  showSearchList,
  handleCloseSearchList,
  handleSearchSubmit,
}) => {
  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      <div className="bg-[#020d18] text-slate-100 pt-[130px] pb-12 px-4 md:px-[50px]">
        <h1 className="w-[fit-content] mb-4 sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          Privacy Policy
        </h1>
        <p>
          If you require any more information or have any questions about our
          privacy policy, please feel free to contact us by email at
          lorenzoTv091@gmail.com
          <br />
          <br />
          At www.lorenzotv.com, the privacy of our visitors is of extreme
          importance to us. This privacy policy document outlines the types of
          personal information is received and collected by www.lorenzoTv.com
          and how it is used.
          <br />
          <br />
          <strong>Log Files</strong>
          <br />
          <br />
          Like many other Web sites, www.lorenzoTv.com makes use of log files.
          The information inside the log files includes internet protocol ( IP )
          addresses, type of browser, Internet Service Provider ( ISP ),
          date/time stamp, referring/exit pages, and number of clicks to analyze
          trends, administer the site, track userâ€™s movement around the site,
          and gather demographic information. IP addresses, and other such
          information are not linked to any information that is personally
          identifiable.
          <br />
          <br />
          <strong>Cookies and Web Beacons</strong>
          <br />
          <br />
          www.lorenzoTv.com does use cookies to store information about visitors
          preferences, record user-specific information on which pages the user
          access or visit, customize Web page content based on visitors browser
          type or other information that the visitor sends via their browser.
          <br />
          <br />
          <strong>DoubleClick DART Cookie</strong> <br />
          <br />
          .:: Google, as a third party vendor, uses cookies to serve ads on
          www.lorenzoTv.com. .:: Google's use of the DART cookie enables it to
          serve ads to users based on their visit to www.doncaprio.com and other
          sites on the Internet. .:: Users may opt out of the use of the DART
          cookie by visiting the Google ad and content network privacy policy at
          the following URL: Some of our advertising partners may use cookies
          and web beacons on our site. Our advertising partners includes.
          <br />
          <br />
          <strong>Google Adsense</strong>
          <br />
          <br />
          These third-party ad servers or ad networks use technology to the
          advertisements and links that appear on www.lorenzoTv.com send
          directly to your browsers. They automatically receive your IP address
          when this occurs. Other technologies ( such as cookies, JavaScript, or
          Web Beacons ) may also be used by the third-party ad networks to
          measure the effectiveness of their advertisements and / or to
          personalize the advertising content that you see. www.lorenzoTv.com
          has no access to or control over these cookies that are used by
          third-party advertisers.
          <br />
          <br />
          You should consult the respective privacy policies of these
          third-party ad servers for more detailed information on their
          practices as well as for instructions about how to opt-out of certain
          practices. www.lorenzoTv.com's privacy policy does not apply to, and
          we cannot control the activities of, such other advertisers or web
          sites. If you wish to disable cookies, you may do so through your
          individual browser options. More detailed information about cookie
          management with specific web browsers can be found at the browser's
          respective websites.
        </p>
        <h1 className="w-[fit-content] mt-8 mb-4 sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          DMCA
        </h1>
        <p>
          LorenzoTv is in compliance with the Digital Millennium Copyright Act
          ("DMCA"). It is our policy to respond to any infringement notices and
          take appropriate actions under the Digital Millennium Copyright Act
          ("DMCA") and other applicable intellectual property laws.
          <br />
          <br />
          If your copyrighted material has been uploaded on LorenzoTv or if
          hyperlinks to your copyrighted material are returned through our
          search engine and you want this material removed, you must provide a
          written communication that details the information listed in the
          following section.
          <br />
          <br />
          Please be aware that you will be liable for damages (including costs
          and attorneys' fees) if you misrepresent information listed on our
          site that is infringing on your copyrights. We suggest that you first
          contact an attorney for legal assistance on this matter.
          <br />
          <br />
          The following elements must be included in your copyright infringement
          claim:
          <br /> - Provide evidence of the authorized person to act on behalf of
          the owner of an exclusive right that is allegedly infringed.
          <br /> - Provide sufficient contact information so that we may contact
          you.
          <br /> - You must also include a valid email address.
          <br /> - You must identify in sufficient detail the copyrighted work
          claimed to have been infringed and including at least one search term
          under which the material appears in LorenzoTv search results.
          <br /> - A statement that the complaining party has a good faith
          belief that use of the material in the manner complained of is not
          authorized by the copyright owner, its agent, or the law.
          <br /> - A statement that the information in the notification is
          accurate, and under penalty of perjury, that the complaining party is
          authorized to act on behalf of the owner of an exclusive right that is
          allegedly infringed.
          <br /> - Must be signed by the authorized person to act on behalf of
          the owner of an exclusive right that is allegedly being infringed.
          <br /> - Send the infringement notice to us by filling out our DMCA
          VIOLATION FORM
          <br /> Please allow us 48 hours to get back to you.
          <br />
          <br /> Note that emailing your complaint to other parties such as our
          Internet Service Provider will not expedite your request and may
          result in a delayed response due to the complaint not being filed
          properly.
        </p>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
