import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const StyledButtonSearchBar = styled('div')(({theme}) => ({
//   height: "5rem",
// }));

// const ButtonValid = styled(Button)`
//   height: 3.5rem;
// `;

// export default styled(ShoppingCartIcon)`
//   color: white;
//   margin-left: auto;
//   margin-right: auto;
// `;

export default function ButtonSearchBar() {
  let navigate = useNavigate();
  function handleSearchButtonClick(e: any) {
    e.preventDefault(); // prevent form submission

    // process request
    //redirect to practitionners list
    console.log(`!!button click`);

    navigate("/practitioners");
  }

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          onClick={(e: any) => handleSearchButtonClick(e)}
          variant="contained"
          sx={{
            height: "3.5rem",
          }}
        >
          Rechercher
        </Button>
      </Stack>
    </div>
  );
}
