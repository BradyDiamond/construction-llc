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
        'images/auto-scroll-carousel/bathroom-remodel.webp',
      alt:
        'A remodeled bathroom'
    },
    {
      imageSrc:
        'images/auto-scroll-carousel/wood-deck.webp',
      alt:
        'Wooden deck with built in seats'
    },
    {
      imageSrc:
        'images/auto-scroll-carousel/door-with-glass.webp',
      alt:
        'Remodeled bathroom with overhead shower and granite sinks'
    },
    {
      imageSrc:
        'images/auto-scroll-carousel/kitchen-windows.webp',
      alt:
        'Window replacement in a kitchen'
    },
    {
      imageSrc:
        'images/auto-scroll-carousel/shed-interior.webp',
      alt:
        'A shed with custom built shelves'
    },
    {
      imageSrc:
        'images/auto-scroll-carousel/deck-stairs.webp',
      alt:
        'Custom built deck with stairs'
    },
    {
      imageSrc:
        'images/auto-scroll-carousel/white-fireplace.webp',
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