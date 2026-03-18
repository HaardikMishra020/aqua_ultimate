import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';


const WaterConditionerInfo = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [play, setPlay] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true); // start loading video when section is visible
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const videoId = 'pmBFATVfSUw';

  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900 max-w-6xl mx-auto rounded-3xl shadow-lg backdrop-blur-md p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left Side: Text */}
        <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('waterConditionerInfo.title')}
          </h2>
          <p className="text-lg text-white leading-relaxed">
            {t('waterConditionerInfo.description')}
          </p>
        </div>

        {/* Right Side: Video */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center">
          <div
            ref={ref}
            className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-blue-200 bg-gradient-to-br from-white/60 to-blue-50 backdrop-blur-lg aspect-w-16 aspect-h-9"
          >
            {/* Always show thumbnail until iframe is loaded */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/${isMobile ? 'mqdefault' : 'maxresdefault'}.jpg`}
              alt={t('waterConditionerInfo.title')}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {play && (
              <iframe
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
                title={t('waterConditionerInfo.title')}
                allow="autoplay; encrypted-media"
                allowFullScreen
                onLoad={() => setVideoLoaded(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterConditionerInfo;