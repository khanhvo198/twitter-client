import { ListItemText } from '@mui/material';
import { FC, ReactElement } from 'react';

interface SideBarTextProps {
  text: string;
  isActive: boolean;
}

export const SideBarText: FC<SideBarTextProps> = ({ text, isActive }): ReactElement => {
  return (
    <ListItemText
      sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
      }}
      primary={text}
      style={{ color: 'white' }}
      primaryTypographyProps={{
        fontSize: 20,
        fontWeight: isActive ? 'bold' : '',
      }}
    />
  );
};
