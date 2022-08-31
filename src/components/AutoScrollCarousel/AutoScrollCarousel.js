import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

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
    slidesToShow: 6,
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
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }


  const hotelCards = [
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
    {
      imageSrc:
        'images/photo-banner/table.webp'
    },
  ]

  return (
    <>
      <Slider {...sliderSettings}>
        {hotelCards.map((card, index) => (          
          <img alt={card.title} src={card.imageSrc} key={index} />          
        ))}
      </Slider>
    </>
  )
}