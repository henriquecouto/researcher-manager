import React from 'react';
import { Paper, Typography, Grid, InputBase, Divider, IconButton } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { Search as SearchIcon, Menu as MenuIcon, Directions as DirectionsIcon } from "@material-ui/icons";



const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10, 10),
        margin: theme.spacing(3, 2),
        maxWidth: 1200,
        backgroundColor: '#4f5d73ff',
        color: "#fff"
      },
    icon:{
        fontSize: 80,
    },
    paperInput: {
        padding: theme.spacing(0,2),
        display: 'flex',
        alignItems: 'center',
        
        
      },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
        
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
    
}))

export default function Search(){
    const classes = useStyle()
    return( 
        <Paper className={classes.root}>
            <Grid container direction="column" spacing={6} alignItems="center">
                <Grid item>
                    <Grid container spacing={6} alignItems="center" justify="center">
                        <SearchIcon className={classes.icon}/>
                        <Grid item>
                            <Typography variant="h3" component="h2">
                                Buscar Pesquisador
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" alignItems='center'>
                    <Typography variant="body1">
                        Mussum Ipsum, cacilds vidis litro <b>abertis.</b>
                    </Typography>
                    <Typography variant="body1">
                        Per aumento de <b>cachacis</b>, eu reclamis.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item style={{width: '85%'}}>
                    
                    <Paper className={classes.paperInput}>
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <SearchIcon style={{fontSize: 60,}}/>
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Nome, Área de conhecimento ou Titulação"
                        inputProps={{ 'aria-label': 'Nome, Área de conhecimento ou Titulação' }}
                    />
                    </Paper>    
                </Grid>
            </Grid>
        </Paper>
            
    )        

}