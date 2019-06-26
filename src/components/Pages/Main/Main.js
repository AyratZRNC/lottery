import React from 'react';
// import {NavLink} from 'react-router-dom';
import Header from "../../Vidget/Logo";
import AdminJpg from '../../../assets/img/admin.jpg';
import Room from '../../../assets/img/room.gif';
import People from '../../../assets/img/people.jpg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        padding: '3%',
        flexDirection: 'column',
    },
    cardMedia: {
        height: '10rem',
        backgroundSize: 'contain',
        // width: '100%'
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [
    {id: 1, img: [AdminJpg], title: 'Панель управления', description: 'Кабинет организатора розыгрыша', link: '/admin' },
    {id: 1, img: [Room], title: 'Окно просмотра', description: 'Включить просмотр розыгрыша', link: '/lottery' },
    {id: 1, img: [People], title: 'Запись участников розыгрыша', description: 'Записать участников розыгрыша', link: '/users' }
    ];

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <main>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={3}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.img}
                                        title={card.description}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button component={Link} to={card.link}>
                                            Перейти
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
