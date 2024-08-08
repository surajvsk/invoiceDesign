const PdfDocument =  require("ironsoftware/ironpdf");
(async () =>{
    // Create a PDF from an HTML string
    const pdf = await PdfDocument.fromHtml("&lt;h1&gt;Hello Developers THis is an Example PDF created with IronPDF&lt;/h1&gt;");
    // Export the PDF to a file
    await pdf.saveAs("output.pdf");
})();