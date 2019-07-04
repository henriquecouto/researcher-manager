import React from 'react'
import AppBar from '../../components/AppBar'
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    root:{ marginTop: 100} //colocar as configurações da grid aqui 
 }))


export default function Search(props){
    const classes = useStyle();
    const {search} = props;
    console.log(search)
    

    return(
        <>
            <AppBar title ="Buscar pesquisador"/>
            <Grid style={{marginTop:100}}>sa </Grid> {/*Fazer os quadrados do desgin aqui*/}
        </>
    )
}
