from fastapi import FastAPI
from .database import engine, Base
from .models import CensusData
from .predict import predict_gentrification

app = FastAPI()

@app.on_event("startup")
async def startup():
    Base.metadata.create_all(bind=engine)

@app.post("/predict")
async def predict(input_data: predict_gentrification.PredictionInput):
    prediction = predict_gentrification.predict(input_data)
    return {"prediction": prediction}

@app.get("/heatmap-data")
async def heatmap_data():
    # Implement your logic to fetch and return heatmap data
    return {"heatmap_data": []}
