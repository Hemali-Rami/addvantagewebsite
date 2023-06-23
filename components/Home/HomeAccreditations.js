import Image from "next/image";
import Link from "next/link";
const HomeAccreditations = () => {
  return (
    <div
      id="services-1"
      className="services-1 bg-lightgrey pt-80 pb-40 services-section division"
    >
      <div className="container">
        {/* SECTION TITLE*/}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="section-title mb-50">
              {/* Title*/}
              <h1 className="h5-xl txt-500">Our Accreditations</h1>

              {/*Text*/}
              <p className="p-lg"></p>
            </div>
          </div>
        </div>

        {/* SERVICES-1 WRAPPER*/}
        <div className="sbox-1-wrapper pc-05 text-center">
          <div className="row">
            {/* SERVICE BOX #1*/}
            {/* <div className="col-sm-6 col-lg-3">
              <div className="sbox-1 grey-color wow fadeInUp" data-wow-delay="0.4s">
                Icon
                <div className="sbox-1-ico">
                  <img height="70" src="images/iso-20000-logo.png" alt="service-icon" />
                </div>

                Title
                <p></p>
              </div>
            </div>*/}

            {/* SERVICE BOX #2*/}
            <div className="col-sm-6 col-lg-6">
              <div
                className="sbox-1 grey-color"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {/* Icon*/}
                <div className="sbox-1-ico">
                  <Link href="https://alldaydr-static-assets.s3.eu-west-2.amazonaws.com/bsi_certificate.pdf">
                    {/* <img
                      height="70"
                      src="/images/iso-27001-logo.png"
                      alt="service-icon"
                    /> */}
                    <Image
                      height={70}
                      src="/images/iso-27001-logo.png"
                      alt="service-icon"
                      width={137}
                    />
                  </Link>
                </div>

                {/* Title*/}
                <p></p>
              </div>
            </div>

            {/* SERVICE BOX #3*/}
            {/* <div className="col-sm-8 col-lg-4"> 
                <div
                  className="sbox-1 grey-color wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  {/* Icon  
                  <div className="sbox-1-ico">
                    <Link
                      href="https://alldaydr-static-assets.s3.eu-west-2.amazonaws.com/cyber-essentials-certificate-july-2019.pdf"
                      target="_blank"
                    >
                      <img
                        height="70"
                        src="images/cyber-essentials-plus-logo.png"
                        alt="service-icon"
                      />
                    </Link>
                  </div>
{/* 
                  Title
                  <p></p>
                </div>
              </div>*/}

            {/* SERVICE BOX #4*/}
            <div className="col-sm-6 col-lg-6">
              <div
                className="sbox-1 grey-color"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                {/* Icon*/}
                <div className="sbox-1-ico">
                  <Link href="https://www.cqc.org.uk/location/1-5258100230">
                    {/* <img height="70" src="/images/cqc.png" alt="service-icon" /> */}
                    <Image
                      height={70}
                      src="/images/cqc.png"
                      alt="service-icon"
                      width={189}
                    />
                  </Link>
                </div>

                {/* Title*/}
                <p></p>
              </div>
            </div>
          </div>
          {/* End row*/}
        </div>
        {/* END SERVICES-1 WRAPPER*/}
      </div>
      {/* End container*/}
    </div>
  );
};

export default HomeAccreditations;
