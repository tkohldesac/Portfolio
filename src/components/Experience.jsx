import React from "react";
import { Grid, Typography, List, ListItem, Modal, Button, Box } from '@mui/material';

export default function TechStack() {

    const [openSE, setOpenSE] = React.useState(false);
    const [openNOT, setOpenNOT] = React.useState(false);
    const [openIT, setOpenIT] = React.useState(false);
    const handleSEOpen = () => setOpenSE(true);
    const handleSEClose = () => setOpenSE(false);
    const handleNOTOpen = () => setOpenNOT(true);
    const handleNOTClose = () => setOpenNOT(false);
    const handleITOpen = () => setOpenIT(true);
    const handleITClose = () => setOpenIT(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <>
        <Grid container justifyContent={'center'} spacing={16}>
            <Grid item>
                <Typography variant="h6">Skills:</Typography>
                <List>
                    <ListItem><Typography variant="p">Managed Service Providers</Typography></ListItem>
                    <ListItem><Typography variant="p">IT Administration</Typography></ListItem>
                    <ListItem><Typography variant="p">WordPress</Typography></ListItem>
                    <ListItem><Typography variant="p">Google</Typography></ListItem>
                    <ListItem><Typography variant="p">Azure</Typography></ListItem>
                    <ListItem><Typography variant="p">Adobe Creative Suite</Typography></ListItem>
                </List>
            </Grid>
            <Grid item>
                <Typography variant="h6">Recent Roles:</Typography>
                <List>
                    <ListItem><Button style={{color: 'black'}} onClick={handleSEOpen}>Freelance Software Engineer</Button></ListItem>
                    <ListItem><Button style={{color: 'black'}} onClick={handleNOTOpen}>Network Operations Technician</Button></ListItem>
                    <ListItem><Button style={{color: 'black'}} onClick={handleITOpen}> IT Support Specialist</Button></ListItem>

                </List>
            </Grid>
            
        </Grid>

        <Modal
        open={openSE}
        onClose={handleSEClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Freelance Software Engineer
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openNOT}
        onClose={handleNOTClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Network Operations Technician
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openIT}
        onClose={handleITClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            IT Support Specialist
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

        </>

     );
}