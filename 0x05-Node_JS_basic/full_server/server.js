import express from 'express';
import router from './routes/index';

const app = express();

app.use(router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
