'use client';
import React from 'react';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Box, Typography } from '@mui/material';
import { FontAwesomeSvgIcon } from '@/components/FontAwesomeSvgIcon/FontAwesomeSvgIcon';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <Box
      component="section"
      className="flex flex-col items-center sm:items-start gap-8"
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        fontWeight={1000}
        className="text-center sm:text-left"
      >
        Crafting Digital Solutions Through Code
      </Typography>

      <Box className="flex w-2/3 gap-3 flex-col lg:flex-row">
        <Button
          variant="contained"
          color="warning"
          startIcon={<FontAwesomeSvgIcon icon={faCodeBranch} />}
          href="/projects"
          size="large"
          className="w-full"
        >
          View my Projects
        </Button>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<SvgIcon component={FileOpenIcon} />}
          href="/gabriel-sampaio-resume.pdf"
          target="_blank"
          size="large"
          className="w-full"
        >
          View my Resume
        </Button>
      </Box>
    </Box>
  );
}
