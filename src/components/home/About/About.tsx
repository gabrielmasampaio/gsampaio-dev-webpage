'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeSvgIcon } from '@/components/FontAwesomeSvgIcon/FontAwesomeSvgIcon';

export default function About() {
  return (
    <>
      <div className="self-center mt-20">
        <Typography variant={'h4'} component={'h4'} fontWeight={1000}>
          {'Who am I?'}
        </Typography>
      </div>
      <Box
        component="section"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        <Box className="flex justify-center md:justify-end">
          <Image
            src="/profile-pic.jpeg"
            alt="profile"
            width={1920}
            height={1920}
            className="w-1/2 md:w-full h-auto rounded-md"
          />
        </Box>

        <Box className="min-h-full flex flex-col md:text-left justify-between gap-3 sm:text-justify">
          <Typography>
            My name is Gabriel (Gabe) Sampaio, and I am a Fullstack Developer
            with a focus on large scale webapps using Java and React
          </Typography>
          <Typography>
            I am currently available for freelance work and open to
            collaborations. Please feel free to reach out!
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu arcu
          </Typography>

          <Box>
            <Link
              href="/about"
              style={{
                display: 'inline-flex',
                flexShrink: 0,
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                color="text.brand"
                className="mt-3 flex items-center gap-2"
              >
                More about me
                <FontAwesomeSvgIcon icon={faArrowRight} />
              </Typography>
            </Link>
          </Box>
          <SocialLinks />
        </Box>
      </Box>
    </>
  );
}
