import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

interface IPractitionerCardProps {
  practitionerData: any;
  index: number;
}

export default function PractitionerCard(
  IPractitionerCardProps: IPractitionerCardProps
) {
  const { firstName, lastName, photo, specialty, address, phoneNumber } =
    IPractitionerCardProps.practitionerData;

  let navigate = useNavigate;

  const handleButtonClick = () => {
    //redirect to practitioner's page | api request
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "85%",
        margin: "1% 5%",
      }}
      variant="outlined"
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          // height="140"
          // width="12"

          sx={{
            width: 128,
            height: 128,
            backgroundColor: "lightgrey!important",
            borderRadius: "100%",
          }}
          image="/static/images/cards/contemplative-reptile.jpg"
          // alt="green iguana"
          alt=""
        />
        <CardContent>
          <Typography variant="h3" component="div">
            {`${firstName}  ${lastName}`}
          </Typography>
          <Typography>{specialty}</Typography>
          <Link to="practitioner/map">{address}</Link>
          {/* <Typography>
            <Box sx={{ textDecoration: "underline" }}>{phoneNumber}</Box>
          </Typography> */}
        </CardContent>
        <Box
          sx={{
            backgroundColor: "lightgray",
            width: "27%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", alignSelf: "center" }}>
            Prochaines disponibilités
          </Typography>

          <List
            sx={{
              backgroundColor: "gray",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItem>
              <ListItemText>Jour</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Jour</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Jour</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Jour</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Jour</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              //   justifySelf: "flex-end",
              //   alignSelf: "center",
              //   backgroundColor: "lightblue",
              width: "30%",
            }}
            onClick={handleButtonClick}
            size="small"
          >
            Prendre rendez-vous
          </Button>
          {/* <Button size="small">Voir plus d'informations</Button> */}
        </CardActions>
      </Box>
    </Card>
  );
}
