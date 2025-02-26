const express = require('express');
const app = express();
const port = 3000;
app.get('/api/:pathParam', (req, res) => {
  const pathParam = req.params.pathParam;
  const queryParam = req.query.queryParam || 'No query param';
  res.json({
    message: 'GET request successful',
    pathParam,
    queryParam,
  });
});
app.post('/create', (req, res) => {
  const arryData = [];
  araayData.push(req.body);
  res.json({
    message: 'POST request successful',
    data: arryData,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
