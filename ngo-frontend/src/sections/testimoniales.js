/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx,  Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Veona Juarez',
      username: '@hi.veona',
      text: `Increible trabajo, información de primera mano`,
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Marlenne Lopez',
      username: '@hello.mimmie',
      text: `Me gusta la forma en la que narran toda su informacion, sobre todo que es una Organizacion sin fines de lucro`,
    },

  ],
  [

    {
      id: 6,
      avatar: avatar6,
      name: 'Thais Carballal',
      username: '@myself.thais',
      text: `Me toco ver una conferencia y fue de lo mejor, gran dinamica`,
    },
  ],
  [
    {
      id: 7,
      avatar: avatar7,
      name: 'Veona Watson',
      username: '@hi.veona',
      text: `Disfruto mucho de sus articulos`,
    },
    {
      id: 8,
      avatar: avatar8,
      name: 'Juan Pablo',
      username: '@hello.mimmie',
      text: `Apoyo total a Organizaciones de este tipo`,
    },
  ],
  [
    {
      id: 9,
      avatar: avatar3,
      name: 'Juana Perez',
      username: '@merryn.manley',
      text: `Excelente trabajo`,
    },
    {
      id: 10,
      avatar: avatar5,
      name: 'Pedro Pedrales',
      username: '@hey.nku',
      text: `Gran trabajo, reporte hecho excelente forma`,
    },
  ],
 
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Testimoniales"
        
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
