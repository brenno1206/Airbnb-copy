'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BottonUser from '@/components/BottonUserIcon';
import { IconAdjustmentsHorizontal } from '@/assets/icons';
import Link from 'next/link';
import Image from 'next/image';
import { PhotoPrototype } from '@/types/AirbnbData';

interface HorizontalTabbedNavigationProps {
  icons: PhotoPrototype[];
}

const HorizontalTabbedNavigation = (props: HorizontalTabbedNavigationProps) => {
  const icons = props.icons;
  return (
    <nav className="flex flex-row items-center">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          764: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index}>
            <Link
              href={'/'}
              className="flex flex-col items-center hover:text-red-500 justify-center text-center"
            >
              <Image
                src={icon.source}
                alt={icon.description}
                width={24}
                height={24}
              />
              <span className="text-sm">{icon.description}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <BottonUser
        icon={
          <IconAdjustmentsHorizontal aria-label="Ícone de Usuário" size={32} />
        }
      >
        Filtros
      </BottonUser>
    </nav>
  );
};

export default HorizontalTabbedNavigation;
