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
                <List component="ul" className={classes.spacingListCard} key={anime.id}>
                    <ListItem key={anime.id}>
                        <AnimeItem favorite={anime.favorite} titleCard={anime.title} image={anime.image.small} />
                    </ListItem>
                </List>
            )
        )}
        </Grid>
    )
    
    
}

export default AnimeList;