import React from 'react';
import Paul from '../../data/paul.jpg';
import Alfredo from '../../data/alfredo.PNG';
import Anh from '../../data/anh.PNG';
// import Navit from './Nav';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Copyright from './Copyright';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      
    },
    main: {
        display: 'inline-block',
        align: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black'
    },
    head: {
        textAlign:'center'
    }
  }));

const AboutTeam = (props) => {
    const classes = useStyles();
  return (
    <div>
    <div style={{textAlign : 'left'}}>
    {/* <Navit /> */}
        
        <div className={classes.main}>
        <div className={classes.root}>
       <Avatar alt="Paul Valenzuela" src={Paul} className={classes.large} />
       <h1 style={{display:'block'}}>Paul Valenzuela </h1>
       <br/>
      
       </div>
       <p style={{display:'block',padding: '0.1rem 0.6rem'}}>Paul is a 5th year CSULB, with a minor in Computer Science. He has experience with Web Development and he wants to create  a project that will help provide security to his community</p>
       <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><LinkedInIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItemLink>
        <ListItemLink href="https://paulvalenzuela-efd15.web.app/">
        <ListItemIcon><ContactMailIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Website" />
        </ListItemLink>
      </List>
      
       </div>
       <p></p>
       <div  style = {{display : 'inline-block', color: 'white', margin:'10px'}}>
        </div> 
    </div>
    <div style={{textAlign : 'left'}}>
        
        <div className={classes.main}>
        <div className={classes.root}>
       <Avatar alt="Paul Valenzuela" src={Alfredo} className={classes.large} />
       <h1 style={{display:'block'}}>Alfredo Leyva </h1>
       <br/>
      
       </div>
       <p style={{display:'block',padding: '0.1rem 0.6rem'}}>Alfredo has background work in automobile industry. His center point of interest is embedded systems</p>
       <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><LinkedInIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItemLink>
        <ListItemLink href="https://paulvalenzuela-efd15.web.app/">
        <ListItemIcon><ContactMailIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Website" />
        </ListItemLink>
      </List>
      
       </div>
       <p></p>
       <div  style = {{display : 'inline-block', color: 'white', margin:'10px'}}>
        </div> 
    </div>
    <div style={{textAlign : 'left'}}>
        
        <div className={classes.main}>
        <div className={classes.root}>
       <Avatar alt="Paul Valenzuela" src={Anh} className={classes.large} />
       <h1 style={{display:'block'}}>Anh Nguyen </h1>
       <br/>
      
       </div>
       <p style={{display:'block',padding: '0.1rem 0.6rem'}}>Anh is a Self-motivated CE student. He is driven to apply renewable power source to solve real life problems</p>
       <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><LinkedInIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItemLink>
        <ListItemLink href="https://paulvalenzuela-efd15.web.app/">
        <ListItemIcon><ContactMailIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Website" />
        </ListItemLink>
      </List>
      
       </div>
       <p></p>
       <div  style = {{display : 'inline-block', color: 'white', margin:'10px'}}>
        </div> 
    </div>
    
{/* <Copyright /> */}
    </div>
  );
};

export default AboutTeam;