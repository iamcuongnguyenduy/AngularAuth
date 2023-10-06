import { interval, of, take, tap } from './node_modules/rxjs';

const obs = interval(1000)
           .pipe(
               take(5),
               tap(i => console.log("obs value "+ i) )
           );

obs.subscribe(value => console.log("observer 1 received " + value));

obs.subscribe(value => console.log("observer 2 received " + value));