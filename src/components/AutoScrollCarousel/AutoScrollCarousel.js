import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}


export default function AutoScrollCarousel() {

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  // Images are sized at 558px width & 700px height

  const bannerImages = [
    {
      imageSrc:
        'images/services-page-banner/hardwood-floors.webp',
      alt:
        'A remodeled living room with hardwood floors'
    },
    {
      imageSrc:
        'images/services-page-banner/kitchen.webp',
      alt:
        'A minimalist styled kitchen'
    },
    {
      imageSrc:
        'images/services-page-banner/bathroom.webp',
      alt:
        'Remodeled bathroom with overhead shower and granite sinks'
    },
    {
      imageSrc:
        'images/services-page-banner/kitchen-modern.webp',
      alt:
        'A modern styled kitchen'
    },
    {
      imageSrc:
        'images/services-page-banner/kitchen-remodel.webp',
      alt:
        'A remodeled kitchen displaying a splash wall above the oven'
    },
    {
      imageSrc:
        'images/services-page-banner/kitchen-floor-remodel.webp',
      alt:
        'Dark hardwood floors in a kitchen'
    },
    {
      imageSrc:
        'images/services-page-banner/traditional-kitchen-remodel.webp',
      alt:
        'A traditional styled kitchen'
    },
  ]

  return (
    <>
      <Slider {...sliderSettings}>
        {bannerImages.map((image, index) => (          
          <img alt={image.alt} src={image.imageSrc} key={index} height="380" border="1px solid black" className="" />          
        ))}
      </Slider>
    </>
  )
}