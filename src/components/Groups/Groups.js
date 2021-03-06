import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Group from './Group/Group';
import useStyles from './styles';

const Groups = ( {setCurrentId }) => {
  const groups = useSelector((state) => state.Groups);
  const classes = useStyles();
  return (    
    !groups.length ? <CircularProgress /> : (
      <Grid className={classes.container} >
        {groups.map((group) => (
          <Grid key={group._id} item xs={12} sm={6} md={6}>
            <Group group={group} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Groups;
