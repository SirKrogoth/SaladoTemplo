import app from './app';
import swaggerDocs from './swagger.json';
import swaggerUi from 'swagger-ui-express';

(async () => {
    try{
        const port = 3000;

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

        app.listen(port, () => {
            console.log(`Running on port ${port}.`);
        })
    } catch(erro) {
        console.log("Deu ruim!");
    }
})();