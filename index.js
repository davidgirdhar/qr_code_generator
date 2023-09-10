/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image'

import fs from 'fs'

inquirer
  .prompt([{
    message:'Type in your URL:',
    name:'URL',
    type:'input'
  }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // console.log(answers);
    const URl = answers.URL
    // console.log('qr',qr);
    var qr_png = qr.image(URl);
    qr_png.pipe(fs.createWriteStream('my_url.png'));
    // var svg_string = qr.imageSync(URl);
    // console.log(svg_string);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });