const port = 8989,
http = require("http"),
httpStatus= require("http-status-codes"),
app= http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html"
    })
    var time = new Date()
    let responseMessage = time
    response.write(`<p>${responseMessage}</p>`);
    response.end();
    console.log(`Send a response: ${responseMessage}`);
});
app.listen(port);
console.log(
    `the server has started and is litening on port number: =${port}`
);
///KARINA CHEN LAB 7