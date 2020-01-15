
# Extraction Requirements

Note, if any of the requirements below are missing, textract will run and extract all files for types it is capable.  Not having these items installed does not prevent you from using textract, it just prevents you from extracting those specific files.

* `PDF` extraction requires `pdftotext` be installed, [link](http://www.foolabs.com/xpdf/download.html)
* `DOC` extraction requires `antiword` be installed, [link](http://www.winfield.demon.nl/), unless on OSX in which case textutil (installed by default) is used.
* `RTF` extraction requires `unrtf` be installed, [link](https://www.gnu.org/software/unrtf/), unless on OSX in which case textutil (installed by default) is used.
* `PNG`, `JPG` and `GIF` require `tesseract` to be available, [link](http://code.google.com/p/tesseract-ocr/).  Images need to be pretty clear, high DPI and made almost entirely of just text for `tesseract` to be able to accurately extract the text.
* `DXF` extraction requires `drawingtotext` be available, [link](https://github.com/davidworkman9/drawingtotext)


# Resume Parser

A Simple NodeJs library to parse Resume files in PDF, DOC, DOCX and TXT format to JSON. If the CVs / Resumes contain any social media profile links then the solution should also parse the public social profile web-pages and organize the data in JSON format (e.g. Linkedin public profile, Github, etc.)


## Installation

`npm install resume-parser --save`

## Usage

```
const ResumeParser = require('simple-resume-parser');

// From file
const resume = new ResumeParser("./files/resume.doc");


// From URL
const resume = new ResumeParser("https://writing.colostate.edu/guides/documents/resume/functionalSample.pdf");

//Convert to JSON Object
  resume.parseToJSON()
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.error(error);
  });

//Save to JSON File
resume.parseToFile('converted') //output subdirectory
  .then(file => {
    console.log('Yay! ', file);
  })
  .catch(error => {
    console.error(error);
  });
```

At this moment application will work fine, but! By default it supports only `.TXT` and `.HTML` text formats. For better performance you should install at least support of `.PDF` (and `.DOC`). Here is instructions, how to do it from [textract README](https://github.com/dbashford/textract#requirements) file:

- `PDF` extraction requires `poppler-utils` be installed, [link](https://poppler.freedesktop.org/)
- `DOC` extraction requires `catdoc` be installed, [link](http://www.wagner.pp.ru/~vitus/software/catdoc/), unless on OSX in which case textutil (installed by default) is used.
- `DOCX` extraction requires `antiword` be available (e.g. `sudo apt-get install -y antiword` for Ubuntu)


## Extending

All 'action' are by building `src/dictionary.js` file. For now it has only basics rules, but it's very flexible (although a bit complicated) and extensible. Just put your rule according to existing and following main principles and enjoy!

## Contributions

- This project was originally forked from Perminder Klair's project [https://www.npmjs.com/package/resume-parser](https://www.npmjs.com/package/resume-parser)