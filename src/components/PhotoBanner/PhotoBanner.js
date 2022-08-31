import React from 'react';
import { PhotoBannerSec, BannerImg } from './PhotoBanner.elements';
import BackgroundBanner from '../../image/home-page/background-banner.webp'

const PhotoBanner = () => {
  return (
    <>
    <PhotoBannerSec>
      <BannerImg src={BackgroundBanner} />
    </PhotoBannerSec>
    </>
  )
};

export default PhotoBanner;