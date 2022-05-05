///<reference types="react" />

declare module "app1/CounterAppOne" {
	const CounterAppOne: React.ComponentType;

	export default CounterAppOne;
}

declare module "app1/DetailView1" {
	const CounterAppOne: React.ComponentType;

	export default CounterAppOne;
}

declare module "app1/DetailView2" {
	const CounterAppOne: React.ComponentType;

	export default CounterAppOne;
}

declare module "app2/CounterAppTwo" {
	const CounterAppTwo: React.ComponentType;

	export default CounterAppTwo;
}


declare module "app1/routes" {
	const routes: {
		path: string,
		component: React.LazyExoticComponent<() => JSX.Element>
	}[];

	export default routes
}

