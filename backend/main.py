from fastapi import FastAPI

app = FastAPI()

@app.post("/gifts_suggestions")
def create_gift_suggestion():
    # create gift suggestion logic
    return {"request_id": 123}

@app.get("/gifts_suggestions/{request_id}")
def read_gift_suggestion(request_id: int):
    # get gift suggestion by request_id logic
    return {"request_id": request_id}
