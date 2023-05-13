import app from './app';

(async () => {
    try{
        const port = 3000;

        app.listen(port, () => {
            console.log(`Running on port ${port}.`);
        })
    } catch(erro) {
        console.log("Deu ruim!");
    }
})();