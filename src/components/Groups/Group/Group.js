import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import GroupIcon from '@material-ui/icons/Group';

import useStyles from './styles';

const Group = ({ group,setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={group.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={group.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{group.name}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(group._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{group.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{group.desp}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(group._id)}>
          <GroupIcon fontSize="small" /> See Posts
        </Button>
      </CardActions>
    </Card>
  );
};

export default Group;
