import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
const giftRequests = new Map<string, any>();

// Endpoint to create a new gift request
app.post('/gifts', async (req: Request, res: Response) => {
  const requestData = req.body;
  const requestText = requestData.text;

  const requestId = uuidv4();

  // getGiftIdeas(requestText).then((giftIdeas) => {
    // Store the result in the in-memory data store
    giftRequests.set(requestId, {
      status: 'completed',
      data: "Data",
      // data: giftIdeas,
    });
  // });

  res.json({
    status: 'success',
    requestId: requestId,
  });
});

app.get('/gifts/:requestId', (req: Request, res: Response) => {
  const requestId = req.params.requestId;

  if (giftRequests.has(requestId)) {
    const result = giftRequests.get(requestId);
    res.json(result);
  } else {
    res.status(404).json({
      status: 'error',
      message: 'Request not found',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
