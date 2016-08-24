// function getTempCallBack(location, callback){
// 	callback(undefined, 78);
// 	callback('City not found');
// }


// getTempCallBack('Philadelphia', function(err, temp){
// 	if (err){
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise (location){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 		resolve(79);
// 		reject("City not found");
// 		}, 1000)

// 	});
// }

// getTempPromise("Philadelphia").then(function(temp){
// 	console.log('Success!', temp);
// }, function(error){
// 	console.log('Error!');

// })

function addPromise (a, b){
	return new Promise(function(resolve, reject){
			if (typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			} else {
				reject("Type error!")
			}			
		}
	)

}

addPromise(2, 3).then(function(sum){
	console.log("Sum is" + sum);
}, function(error){
	console.log("Error!" + error);
});

addPromise(2, 'damn').then(function(sum){
	console.log("Sum is" + sum);
}, function(error){
	console.log("Error!" + error);
});

addPromise('damn', 'son').then(function(sum){
	console.log("Sum is" + sum);
}, function(error){
	console.log("Error!" + error);
});