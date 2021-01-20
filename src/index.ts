import * as app from '@src/app';

const PORT = process.env.PORT || 9000;
app.init()
	.then((server) => {
		server.listen(PORT, () => {
			console.info(`> Server is running on Port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
