import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Groups from '../../components/Groups/Groups'

const Home = () => {
 
  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Groups />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
