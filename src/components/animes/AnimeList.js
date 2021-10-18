import { Grid, List, ListItem, makeStyles } from "@material-ui/core";
import AnimeItem from "./AnimeItem";


const useStyles = makeStyles({
    spacingListCard: {
        margin: '-12px'
    },
  });

function AnimeList(props) {
    const classes = useStyles();
    return (
        <Grid container 
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={0}
        >
            {props.animes.map((anime, index) => (
                <List className={classes.spacingListCard}>
                    <ListItem key={index}>
                        <AnimeItem titleCard={anime.labelName} />
                    </ListItem>
                </List>
            )
        )}
        </Grid>
    )
    
    
}

export default AnimeList;