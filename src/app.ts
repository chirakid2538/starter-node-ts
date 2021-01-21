import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

export const init = async (): Promise<Application> => {
	const app: Application = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/', (req: Request, res: Response) => {
		res.send({ status: 'works' });
	});
	return app;
};
