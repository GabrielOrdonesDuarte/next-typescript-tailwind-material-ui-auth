import Link from 'next/link';
import { makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import Container from '../../components/Container/Container';
import GridItem from '../../components/GridItem/GridItem';
import RouteGuard from '../../components/RouteGuard/RouteGuard';

const Login: any = () => {
  const classes = useStyles();
  return (
    <>
      <RouteGuard>
        <Container>
          <GridItem sm={12} lg={6}>
            <Paper className={classes.card1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dicta iusto molestiae quas rem officia est unde dignissimos
              obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
              incidunt fuga.
            </Paper>
          </GridItem>
          <GridItem sm={12} lg={6}>
            <Paper className={classes.card1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dicta iusto molestiae quas rem officia est unde dignissimos
              obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
              incidunt fuga.
            </Paper>
          </GridItem>
        </Container>
        <Container>
          <GridItem sm={12} lg={4}>
            <Paper className={classes.card2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dicta iusto molestiae quas rem officia est unde dignissimos
              obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
              incidunt fuga.
            </Paper>
          </GridItem>
          <GridItem sm={12} lg={8}>
            <Paper className={classes.card2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dicta iusto molestiae quas rem officia est unde dignissimos
              obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
              incidunt fuga.
              <h1
                className={`text-red-500 bg-blue-900 inline-block ${classes.tamanhoFonte}`}
              >
                TailWind Exemplo
              </h1>
              <Typography variant="h1">h1</Typography>
              <Typography variant="h2">h2</Typography>
            </Paper>
          </GridItem>
          <Link href="/">Voltar</Link>
        </Container>
      </RouteGuard>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card1: {
    padding: '15px',
    textAlign: 'center',
    color: theme.palette.custom.corLaranja,
  },
  card2: {
    padding: '5px',
    textAlign: 'right',
    color: theme.palette.text.primary,
  },
  tamanhoFonte: {
    fontSize: 20,
  },
}));

export default Login;
