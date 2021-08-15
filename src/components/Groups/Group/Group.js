import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteGroups} from '../../../Redux/Actions/Groups';

import useStyles from './styles';

const Group = ({ group,setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={group.photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={group.name} />
      <div className={classes.overlay}>
        <Typography variant="h6">{group.name}</Typography>
      </div>
      <div className={classes.overlay2}>
        {
          user?.result?(<Button onClick={() => setCurrentId(group._id)} style={{ color: 'white' }} size="small">Edit</Button>):null
        }
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{group.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{group.description}</Typography>
      </CardContent> 
      <CardActions className={classes.cardActions}>
        {
          user?.result?(
            <Button size="small" color="secondary" onClick={() => dispatch(deleteGroups(group._id))}>
              <DeleteIcon fontSize="small" /> 
            </Button>
          ):null
        }
        
      </CardActions>
    </Card>
  );
};

export default Group;
