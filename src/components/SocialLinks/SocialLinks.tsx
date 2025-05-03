'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeSvgIcon } from '@/components/FontAwesomeSvgIcon/FontAwesomeSvgIcon';
import {
  faGithub,
  faLinkedin,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import outUrls from '@/lib/outUrls';
import { Box } from '@mui/material';

const ICON_CLASSES = `
  md:p-2 p-3 md:text-3xl text-4xl
  active:scale-125 active:opacity-80
  transition-opacity
  rounded
`;

export default function SocialLinks() {
  return (
    <Box
      component="div"
      className="flex lg:gap-0 md:gap-4 sm:gap-6 mt-1 self-center md:self-start"
    >
      <Link
        href={outUrls.linkedIn}
        target="_blank"
        className={ICON_CLASSES + ' hover:text-blue-500'}
      >
        <FontAwesomeSvgIcon icon={faLinkedin} />
      </Link>
      <Link
        href={outUrls.github}
        target="_blank"
        className={ICON_CLASSES + ' hover:text-gray-500'}
      >
        <FontAwesomeSvgIcon icon={faGithub} />
      </Link>
      <Link
        href={outUrls.youtube}
        target="_blank"
        className={ICON_CLASSES + ' hover:text-red-500'}
      >
        <FontAwesomeSvgIcon icon={faYoutube} />
      </Link>
      <Link
        href={outUrls.twitch}
        target="_blank"
        className={ICON_CLASSES + ' hover:text-purple-500'}
      >
        <FontAwesomeSvgIcon icon={faTwitch} />
      </Link>
    </Box>
  );
}
