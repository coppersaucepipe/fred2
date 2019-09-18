const express = require("express") ;
const port = 8080;
const app = express();
const pizzas = [
    {
        id: 1,
        name: "hawian",
        size: "large",
        spicy: true
    },
    {
        id: 2,
        name: "cheese",
        size: "tiny",
        spicy: false
    }
];

app.get('/pizzas', (reg, resp) => {
    console.log('returning pizzas')
    resp.setHeader('Content-Type', 'application/json');
    resp.send(pizzas);
});

console.log(`server listening on ${port}`);
app.listen(port);