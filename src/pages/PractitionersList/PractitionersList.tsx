import { Box, Typography } from "@mui/material";
import { PractitionerCard } from "../../components/PractitionerCard";

export default function PractitionersList() {
  let data = [
    {
      firstName: "Joe",
      lastName: "Doe",
      phoneNumber: "123y218736213",
      specialty: "Cardiologue",
      address: "1 rue de la gare, Paris",
    },
    {
      firstName: "Joe",
      lastName: "Doe",
      phoneNumber: "123y218736213",
      specialty: "Cardiologue",
      address: "1 rue de la gare, Paris",
    },
    {
      firstName: "Joe",
      lastName: "Doe",
      phoneNumber: "123y218736213",
      specialty: "Cardiologue",
      address: "1 rue de la gare, Paris",
    },
    {
      firstName: "Joe",
      lastName: "Doe",
      phoneNumber: "123y218736213",
      specialty: "Cardiologue",
      address: "1 rue de la gare, Paris",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
        {"120"} résultats pour la recherche "{"Généraliste"}" à {"Paris"}
      </Typography>

      {data.map((practitioner, index) => (
        <PractitionerCard index={index} practitionerData={practitioner} />
      ))}
    </Box>
  );
}
