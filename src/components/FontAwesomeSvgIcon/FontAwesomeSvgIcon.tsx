// src/components/FontAwesomeSvgIcon.tsx
import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FontAwesomeSvgIconProps
  extends Omit<SvgIconProps, 'component' | 'fontSize'> {
  icon: IconProp;
  fontSize?: 'inherit' | 'small' | 'medium' | 'large';
}

export function FontAwesomeSvgIcon({
  icon,
  fontSize = 'inherit',
  sx,
  ...svgProps
}: Readonly<FontAwesomeSvgIconProps>) {
  return (
    <SvgIcon
      inheritViewBox
      fontSize={fontSize}
      sx={{
        ...sx,
      }}
      {...svgProps}
    >
      <FontAwesomeIcon icon={icon} />
    </SvgIcon>
  );
}
