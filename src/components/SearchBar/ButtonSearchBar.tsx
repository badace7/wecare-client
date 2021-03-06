import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

// const StyledButtonSearchBar = styled('div')(({theme}) => ({ 
//   height: "5rem",
// }));

const ButtonValid = styled(Button)`
  height: 3.5rem;
`;

// export default styled(ShoppingCartIcon)`
//   color: white;
//   margin-left: auto;
//   margin-right: auto;
// `;

export default function ButtonSearchBar() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <ButtonValid variant="contained">Rechercher</ButtonValid>
      </Stack>
    </div>
  );
}