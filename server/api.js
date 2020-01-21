const express = require('express');

const app = express();

const index = require("./routes/index");
app.use("/", index);

app.listen(8000, () => {
	console.log("server is running on port 8000");
})

