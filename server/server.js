const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/ask', async (req, res) => {
    const question = req.body.question;
    // Here, you'd make an API call to ChatGPT with the Wolfram plugin selected.
    // For now, we'll mock a response.
    const response = await axios.post('CHATGPT_API_ENDPOINT', {
        query: question,
        // other necessary parameters
    });
    res.json(response.data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});