import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/sastra.png";
import profilePic2 from "../../img/srm.png";
import profilePic3 from "../../img/kvm.png";
import profilePic4 from "../../img/guvi.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "I Did my Masters degree in Computer Applicatios from SASTRA Deemed to Be University,Thanjavur ,2018-2021",
    },
    {
      img: profilePic2,
      review:
" i Did my Undergraduation in Physics From SRM Institute of Science and Tehcnology,Chennai,Kattankulathur,2015-2018        "    },
    {
      img: profilePic3,
      review:
        "I did my Schooling From Kendriya Vidyalaya Minambakkam, Chennai, 2003-2015",
    },
    {
      img: profilePic4,
      review:
"Im Interested in Web Developement,being part of building software products , so im Learning Online courses such as Guvi ,Udemy  so that to be part of Team where i can learn as well as contribute my best in order to complete the end goal with customer satisfaction "    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My </span>
        <span>Qualifications </span>
        <span>And Interests</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;