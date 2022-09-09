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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  // Images are direct routed from the public images directory
  // Didn't know what to put for alts here
  const bannerImages = [
    {
      imageSrc:
        'images/services-page-banner/bathroom-remodel.webp',
      alt:
        'A remodeled bathroom'
    },
    {
      imageSrc:
        'images/services-page-banner/wood-deck.webp',
      alt:
        'Wooden deck with built in seats'
    },
    {
      imageSrc:
        'images/services-page-banner/door-with-glass.webp',
      alt:
        'Remodeled bathroom with overhead shower and granite sinks'
    },
    {
      imageSrc:
        'images/services-page-banner/kitchen-windows.webp',
      alt:
        'Window replacement in a kitchen'
    },
    {
      imageSrc:
        'images/services-page-banner/shed-interior.webp',
      alt:
        'A shed with custom built shelves'
    },
    {
      imageSrc:
        'images/services-page-banner/deck-stairs.webp',
      alt:
        'Custom built deck with stairs'
    },
    {
      imageSrc:
        'images/services-page-banner/white-fireplace.webp',
      alt:
        'Remodeled white fireplace custom made'
    },
  ]

  return (
    <>
      <Slider {...sliderSettings}>
        {bannerImages.map((image, index) => (          
          <img alt={image.alt} src={image.imageSrc} key={index} height="380" border="1px solid black" />          
        ))}
      </Slider>
    </>
  )
}