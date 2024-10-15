import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Enter the website URL:", 
    name: "URL"
  }])
  .then((answers) => {
    const url = answers.URL;
    
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('File has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });


  // Import the inquirer module for asking user input
// Import the qr-image module for generating QR codes
// Import the fs module for file system operations

// Start the inquirer prompt asking the user to enter a website URL
// The user input will be stored in the variable with the name "URL"

// Once the user provides the URL, it is stored in the url variable

// Create a QR code from the entered URL
// Save the QR code as a PNG file named 'qr_img.png'

// Write the entered URL into a text file named 'URL.txt'
// If there is an error while writing, stop and display the error
// If successful, print "File has been saved!" message to the console

// Catch and handle any errors that occur during the process
// If there's an error with the terminal environment, handle it
// Handle any other errors
