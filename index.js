/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// All 3 are importing various libraries for us to use to create this.

// Inquirer allows us to ask the user for inputs within the terminal. // 
import inquirer from "inquirer"; 

// qr-image lets us generate an image based off the user inputs text.
import qr from "qr-image";

// Basic NPM package that allows us to create files within our code and access various files.
import fs from "fs";

// Now we use the inquirer library to create a prompt with an object. This allows us to store the inputs in message and name.
inquirer
  .prompt([
    {
    message: "Type something to create a QR code: ",
    name: "URL",
  },
])  // Access the qr-code library to generate a corresponding qr-code 
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    console.log("Qr-code has been created successfully!") // Returns to the user that "qr_img.png" has been created sucessfully.
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

  }) // Error checker and corresponding prompts to let the user know if any issues occured. error => refer to documentation.
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt error has occurecd. Type proper url.")
    } else {
      console.log("Please refer back to documentation to troubleshoot.")
    }
  })

