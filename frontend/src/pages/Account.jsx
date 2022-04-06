import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';


export const Account = (props) => (
  <>
  <Card
    sx={{ height: '100%' }}
    {...props} >
  
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TASKS PROGRESS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            90.5%
          </Typography>
        </Grid>

      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={90.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>

  </>
);  
