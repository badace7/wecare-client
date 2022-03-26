import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonSearchBar from "../../components/SearchBar/ButtonSearchBar";
import { Label, RowingTwoTone } from "@mui/icons-material";
import { styled } from "@mui/material";

const StyledSearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const StyledField = styled(TextField)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const specialities = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
];

export default function SelectTextFields() {
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState("");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  //   };

  function handleSubmit(e: any) {
    console.log(`!!form submission attempt`);

    e.preventDefault();
  }

  return (
    <Box
      // component="form"
      component="div"
      sx={{
        "& .MuiTextField-root": {
          // m: 1,

          width: "30ch",
        },
      }}
      // noValidate
      // autoComplete="off"
      // onSubmit={(e: any) => {
      //   handleSubmit(e);
      // }}
    >
      <StyledSearchBar>
        <TextField
          id="outlined-select-currency"
          type="text"
          label="Nom du médecin, spécialité..."
          value=""

          // sx={{
          //   '& .MuiTextField-root': {

          //     m: 10,

          // }}

          //   onChange={handleChange}
          //   helperText="Please select your currency"
        ></TextField>
        <TextField
          id="outlined-select-currency"
          type="text"
          label="Où ?"
          value=""
          //   onChange={handleChange}
          //   helperText="Please select your currency"
        ></TextField>
        <ButtonSearchBar />
      </StyledSearchBar>
    </Box>
  );
}
