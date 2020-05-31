import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
  community: {
    margin: '2rem 0rem',
  },
  headline: {
    marginBottom: '1rem',
  },
  photos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function Gallery({ photos }) {
  const classes = useStyles();

  return (
    <div className={classes.community}>
      <Typography
        className={classes.headline}
        color="primary"
        align="center"
        variant="h3"
      >
        #HomeIsWhereTheHopIs
      </Typography>
      <div className={classes.photos}>
        <GridList
          cellHeight={200}
          spacing={1}
          className={classes.gridList}
          cols={5}
        >
          {photos.map((photo, i) => (
            <GridListTile key={photo.id} cols={i % 4 ? 2 : 1} rows={1}>
              <img src={photo.urls.regular} alt={photo.alt_description} />
              <GridListTileBar
                title={photo.likes}
                titlePosition="top"
                actionIcon={
                  <IconButton
                    aria-label={`favorites ${photo.likes}`}
                    className={classes.icon}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}