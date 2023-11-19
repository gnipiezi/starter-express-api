  const express = require('express');
  const cors = require('cors');
  const app = express();
  const port = 3000;
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`API en écoute sur le port ${PORT}`);
  });
  // Activer CORS pour toutes les origines
  app.use(cors());

  // Importer les données JSON
  const data = require('./data.json');

app.get('/articles/:nom_article', (req, res) => {
    console.log(req.params.nom_article);
    const nomArticle = decodeURIComponent(req.params.nom_article.toLowerCase());
    const article = data.find(item => item.Article.toLowerCase() === nomArticle);
    console.log(article);

    if (article) {
      res.json(article);
    } else {
      res.status(404).send('Article non trouvé');
    }
});
  // Route pour obtenir tous les articles
  app.get('/articles', (req, res) => {
    res.json(data);
  });



  // Démarrer le serveur
  app.listen(port, () => {
    console.log(`API en écoute sur http://localhost:${port}`);
  });
