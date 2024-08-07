const fs = require("fs");
const path = require("path");
var html_to_pdf = require("html-pdf-node");

let options = {
    format: "A4",
    printBackground: true,
    headerTemplate: `
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
      <style>
        .header {
          font-size: 12px;
          color: lightgray;
          text-align: center;
          width: 100%;
        }
        .w-100 {
          width: 100%;
        }
        .list-unstyled {
          list-style: none;
          padding: 0;
        }
        .image-cell {
          text-align: center;
        }
        .font-bold {
          font-weight: bold;
        }
        .border-top-bottom-thik {
          border-top: 2px solid black;
          border-bottom: 2px solid black;
        }
      </style>
      <div class="header">
        <table class="w-100">
          <tr>
            <td><img src="file://${path.resolve(__dirname, 'image/logo.png')}" width="270"></td>
            <td>Vikas Center, S V Road, BEST Colony, Santacruz West,
              Mumbai, Maharashtra 400054, India<br>Tel.: 9619495878 | Email: reservations@autoriders.in
            </td>
            <td rowspan="2" class="image-cell">
              <img src="file://${path.resolve(__dirname, 'qr.jpg')}" class="text-center" width="150" height="150">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul class="list-unstyled">
                <li>IRN: 1aa7fc6f03c0634f6dc5a646d34b465015beaebd38b0031c6d31220ea955a0fa</li>
                <li>ACK NO: 122420151191762</li>
                <li>ACK DATE: 12/02/2024 17:51</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="font-bold border-top-bottom-thik" style="text-align:center" colspan="3">
              TAX INVOICE
            </td>
          </tr>
        </table>
      </div>`,
    footerTemplate: `
      <div style="color: lightgray; page-break-inside: avoid; font-size: 10px; padding-top: 5px; text-align: center; width: 100%;">
        <span>Page</span> <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>`,
    margin: {
      bottom: 0, // minimum required for footer msg to display
      left: 0,
      right: 0,
      top: 180,
    },
    displayHeaderFooter: true,
    landscape: false, // Set landscape orientation
  };

function getMachineInfo() {
    let file = {
        url: `file://${path.resolve(__dirname, "text.html")}`,
    };
    html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
      console.log("PDF Buffer:-", pdfBuffer);
      fs.writeFile("FinancialMarkets1.pdf", pdfBuffer, function (err, result) {
        if (err) console.log("error", err);
        console.log("DONE");
      });
    });
  }
  getMachineInfo();