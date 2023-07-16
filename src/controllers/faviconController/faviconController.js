const path = require('path');

function faviconController(req, res) {
  // Ruta absoluta hacia tu archivo favicon.ico
  const faviconPath = path.join(__dirname, 'favicon.ico');

  // Envía el archivo favicon.ico
  res.sendFile(faviconPath, (err) => {
    console.log("Rutita",faviconPath);
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Icon was sent');
    }
  });
}

module.exports = faviconController;
