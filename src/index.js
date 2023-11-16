import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: process.env.APP_NAME
	}
});

export default app;