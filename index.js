const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
	if(err) return console.log('Err')

	const db = client.db('TodoApp')

	db.collection('Users').find().toArray().then((res)=>{
		console.log(res)
	},(err)=>{
		console.log('err',err)
	})

	/*db.collection('Users').insertOne(
	{
		name:'Sebas',
		age:10
	},(err,res)=>{
		if(err) return console.log('Err inserting')
		console.log('added',JSON.stringify(res.ops,undefined,2))
	})*/
})