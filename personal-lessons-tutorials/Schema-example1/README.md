### SCHEMA CREATION | this exercise is just about how schemas are structured

<p>A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection. ... Document schemas follow the same JSON schema specification as document validation in the MongoDB server.
</p>

<br>

#### tricks

<p>When you want to visualize certain data</p>

```javascript

// AS YOU CAN SEE the data is not structured, to prevent this
// you can use pretty() to have a better visualization of if.
//
//
db.tomatosusers.find()
{ "_id" : ObjectId("5f8dadf4eb5278d50b6a81b5"), "name" : "Alma", "age" : "25", "address" : "Berlin", "hobbies" : [ "cooking", "dancing" ], "emails" : { "private" : "home@gmail.com", "work" : "info@gmail.com" }, "data" : "Mon Oct 19 2020 17:17:08 GMT+0200 (CEST)" }
{ "_id" : ObjectId("5f8dae23eb5278d50b6a81b6"), "name" : "Ludovico", "age" : "40", "address" : "Lituania", "hobbies" : [ "writing", "playing violon" ], "emails" : { "private" : "home@gmail.com", "work" : "info@gmail.com" }, "data" : "Mon Oct 19 2020 17:17:55 GMT+0200 (CEST)" }
{ "_id" : ObjectId("5f8db744eb5278d50b6a81bc"), "name" : "Ludovic", "age" : "30", "address" : "Paris", "data" : "Mon Oct 19 2020 17:56:52 GMT+0200 (CEST)" }
{ "_id" : ObjectId("5f8db744eb5278d50b6a81bd"), "name" : "Sonia", "age" : "24", "address" : "Florence", "data" : "Mon Oct 19 2020 17:56:52 GMT+0200 (CEST)" }
{ "_id" : ObjectId("5f8db744eb5278d50b6a81be"), "name" : "Nancy", "age" : "12", "address" : "Pompei", "data" : "Mon Oct 19 2020 17:56:52 GMT+0200 (CEST)" }

```

<br>

##### result

<br>

```javascript
> db.tomatosusers.find().pretty()
{
	"_id" : ObjectId("5f8dadf4eb5278d50b6a81b5"),
	"name" : "Alma",
	"age" : "25",
	"address" : "Berlin",
	"hobbies" : [
		"cooking",
		"dancing"
	],
	"emails" : {
		"private" : "home@gmail.com",
		"work" : "info@gmail.com"
	},
	"data" : "Mon Oct 19 2020 17:17:08 GMT+0200 (CEST)"
}
{
	"_id" : ObjectId("5f8dae23eb5278d50b6a81b6"),
	"name" : "Ludovico",
	"age" : "40",
	"address" : "Lituania",
	"hobbies" : [
		"writing",
		"playing violon"
	],
	"emails" : {
		"private" : "home@gmail.com",
		"work" : "info@gmail.com"
	},
	"data" : "Mon Oct 19 2020 17:17:55 GMT+0200 (CEST)"
}
{
	"_id" : ObjectId("5f8db744eb5278d50b6a81bc"),
	"name" : "Ludovic",
	"age" : "30",
	"address" : "Paris",
	"data" : "Mon Oct 19 2020 17:56:52 GMT+0200 (CEST)"
}
{
	"_id" : ObjectId("5f8db744eb5278d50b6a81bd"),
	"name" : "Sonia",
	"age" : "24",
	"address" : "Florence",
	"data" : "Mon Oct 19 2020 17:56:52 GMT+0200 (CEST)"
}
{
	"_id" : ObjectId("5f8db744eb5278d50b6a81be"),
	"name" : "Nancy",
	"age" : "12",
	"address" : "Pompei",
	"data" : "Mon Oct 19 2020 17:56:52 GMT+0200 (CEST)"
}

```

<br>
<br>

<hr>

<br>
<br>
