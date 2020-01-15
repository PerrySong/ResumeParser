const ResumeParser = require('cv-parser-multiformats');

// From file to file
// ResumeParser
//   .parseResumeFile('../PerryResume16.pdf', '.') // input file, output dir
//   .then(file => {
//     console.log("Yay! " + file);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// From URL
ResumeParser
  .parseResumeUrl('https://showcase-dev-attachmentsbucket-1zd3mf10gr28.s3.amazonaws.com/public/PerryResume16.pdf') // url
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.error(error);
  });