import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import { useColorScheme } from '@mui/material';

export default function ColorModeButton() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  const Icon = mode === 'dark' ? DarkModeIcon : LightModeIcon;

  return (
    <IconButton onClick={handleClick}>
      <Icon />
    </IconButton>
  );
}
