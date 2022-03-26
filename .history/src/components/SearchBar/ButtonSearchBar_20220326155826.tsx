import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { Router } from "react-router-dom";

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
  function handleSearchButtonClick() {
    // process request
    //redirect to practitionners list
  }

  return (
    <div>
      <Stack spacing={2} direction="row">
        <ButtonValid onClick={handleSearchButtonClick} variant="contained">
          Rechercher
        </ButtonValid>
      </Stack>
    </div>
  );
}
