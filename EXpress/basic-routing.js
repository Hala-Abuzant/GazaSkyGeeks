// import express from "express";

// const app = express();
// app.use(express.json());

// // attach univeristy
// app.all('/student', (req, res, next) => {
//   req['university'] = 'nnu';
//   next() // pass control to the next handler
// });

// app.post("/student", (req, response, next) => {
//   req['something'] = 'anything';
//   if (req.body.name === 'noor') {
//     response.send(`${req.body.name} is not  happy!`);
//   }
//   if (typeof req.body.name !== 'string') {
//     throw new Error();
//   }
//   if (req.body.name.length > 30) {
//     throw new Error();
//   }
//   next();
// },(request, res) => {
//   const student = request.body.name;
//   console.log(request.body)
//   res.send(`${student} is very happy! ${request.y'
// });

// app.put("/user", (req, res) => {
//   res.send("Got a PUT request at /user");
// });

// app.delete("/user", (req, res) => {
//   res.send("Got a DELETE request at /user");
// });


// app.listen(5000, () =>
// console.log("🚀 Server ready at: http://localhost:3000")
// );



//------------------------------------------------------

import express from "express";
import {body} from 'express-validator'
const app = express();

app.use(express.json());



app.post("/calculate", (req, res, next) => {
    const { operation, x, y } = req.body;
    if (!operation && !x && !y) {
        throw new Error();
    }
    else {
        next();
    }
}, (req, res, next) => {
    const { operation, x, y } = req.body;
    if (typeof x !== 'number' || typeof y !== 'number') {
        res.send('x & y have to be numbers!')
    }
    else {
        next();
    }
}
    , (req, res) => {
        const { operation, x, y } = req.body;
        if (operation === '*') {
            res.send({
                result:x*y,
                x,
                y,
                operation:"*",
            });
        }
        else if (operation === '/') {
            res.send({
                result:x/y,
                x,
                y,
                operation:"/",
            });
        }
        else if (operation === '+') {
            res.send({
                result:x+y,
                x,
                y,
                operation:"+",
            });
        }
        else if (operation === '-') {
            res.send({
                result:x-y,
                x,
                y,
                operation:"-",
            });
        }
        else {
            res.send("Error");
        }
    });

app.post("/", (req, res) => {
    res.send("Got a POST request");
});

app.put("/user", (req, res) => {
    res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at /user");
});


app.listen(3000, () =>
    console.log(`🚀 Server ready at: http://localhost:3000`)
);


//-------------------------------------------------------------------

// import express from 'express';
// import { body, validationResult } from 'express-validator';
// // create express instance
// const app = express();
// // extract json data
// app.use(express.json());
// const operations = ['+', '-', '/', '*'];
// app.post('/calculate', 
// [
//     body('x').exists().withMessage('x must be defined here').bail().isInt({ min: 0, max: 100 }).withMessage('x value must not be greater than 100'),
//     body('y').exists().isInt(),
//     body('operation').exists().isIn(operations).withMessage(`please ensure operation value is one of the following ${operations.join(', ')}`)
// ]
// , (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).jsonp(errors.array());
//     }
  
//     const { x ,y ,operation } = req.body;
//     let result;
//     switch (operation) {
//         case '+' :
//             result = x + y;
//             break;
//         case '-': 
//             result = x - y;
//             break;
//         case '*':
//             result = x * y;
//             break;
//         case '/':
//             result = x / y;
//             break;
//     }
//     res.send({ result })
// })

// app.listen(3000, () =>
//   console.log(`🚀 Server ready at: http://localhost:3000`)
// );



