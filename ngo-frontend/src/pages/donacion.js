import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "../components/layout";

const Donacion = () => {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
            <div>
                <h1>Donación</h1>
            </div>
        </Layout>
    </ThemeProvider>
  );
};



export default Donacion;