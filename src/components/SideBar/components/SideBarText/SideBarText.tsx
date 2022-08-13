import { ListItemText } from '@mui/material';
import { FC, ReactElement } from 'react';

interface SideBarTextProps {
  text: string;
}

export const SideBarText: FC<SideBarTextProps> = ({ text }): ReactElement => {
  return (
    <ListItemText
      sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
      }}
      primary={text}
      style={{ color: 'white' }}
      primaryTypographyProps={{
        fontSize: 20,
        fontWeight: 'bold',
      }}
    />
  );
};
