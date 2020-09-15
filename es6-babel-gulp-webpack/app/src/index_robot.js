const roads = [
"Alice's House-Bob's House",
"Alice's House-Post Office",
"Daria's House-Ernie's House",
"Ernie's House-Grete's House",
"Grete's House-Shop",
"Marketplace-Post Office",
"Marketplace-Town Hall",
"Alice's House-Cabin",
"Bob's House-Town Hall",
"Daria's House-Town Hall",
"Grete's House-Farm",
"Marketplace-Farm",
"Marketplace-Shop",
"Shop-Town Hall",
]

console.log('roads = \n',roads);

function buildRoutes(roads) {
    function addRoute(from, to) {
    try {
//        console.log('before', routes,from, to);
        routes[from].push(to);
//        console.log('after', routes, from, to);
    } 
    catch(err) {
//        console.log('got to catch', err);
        routes[from] = [to];
    }
        
//	    (routes[from] == null) ? (() => {
//           routes[from] = [to];
//        })() : ( () => { 
//            routes[from].push(to);
//        })();
    }
    
    
    let routes = Object.create({});
    for (let [from, to] of roads.map(r => r.split("-"))) {
		addRoute(from, to);
		addRoute(to, from);

    }
   return routes;
}    

const routes = buildRoutes(roads);

console.log('routes are as follows:\n', routes);

const array1 = ['a', 'b', 'c'];
const array2 = 'd';
const array2e = 'e';
const array3 = array1.concat(array2);
const array3e = array3.concat(array2e);

console.log(array3);
console.log(array3e);


