import React from 'react';
import { PhotoBannerSec, BannerImg } from './PhotoBanner.elements';
import BackgroundBanner from '../../image/home-page/background-banner.webp'

const PhotoBanner = () => {
  return (
    <>
    <PhotoBannerSec>
      <BannerImg src={BackgroundBanner} alt='Banner image that shows kitchens, a bedroom and a bathroom' />
    </PhotoBannerSec>
    </>
  )
};

export default PhotoBanner;