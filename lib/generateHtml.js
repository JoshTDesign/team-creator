// Create a function to generate markdown for README



// const generateManagerCard = (teamArray) => {
//     console.log('generateManagerCard run');
//     // each (teamArray, => {
//     //     return `
//     //     <div class="card">
//     //     <h1>${this.name}</h1>
//     //     <h2>Manager</h2>
//     //     <ul>
//     //         <li>${this.email}</li>
//     //         <li>${this.phone}</li>
//     //         <li>${this.id}</li>
//     //     </ul>
//     //     </div>
//     //     `
//     // })
// }







const generateHtml = (data) => {
    if (data.getRole() === 'Manager') {
        return 'Manager';
    }

//     return `  
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>Team</title>
// </head>

// <body>
//     <header>
//         <h1>Team Creator</h1>
//     </header>  
//     <main>
//         <div class="container">
//             <div class="card">
//                 <h1>${this.name}</h1>
//                 <h2>role</h2>
//                 <ul>
//                     <li>${this.email}</li>
//                     <li>${this.phone}</li>
//                     <li>${this.id}</li>
//                 </ul>
//             </div>

//         </div>
//     </main>  
//     <footer></footer>
// </body>
// </html>
//     `
    
}



    module.exports = generateHtml