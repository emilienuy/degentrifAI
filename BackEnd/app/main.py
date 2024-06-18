## main.py
from fastapi import FastAPI, Depends
from .schemas import PredictionRequest, PredictionResponse
from .predict import predict_gentrification
from .database import get_db
import joblib
import json

app = FastAPI()

# Load the model at startup
model = joblib.load("models/xgboost_model.pkl")

@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    prediction = predict_gentrification(request, model)
    return prediction

@app.get("/heatmap-data")
async def heatmap_data():
    # Load and process heatmap data
    heatmap_data = []
    with open('data/heatmap_data.geojson') as f:
        heatmap_data = json.load(f)['features']
    return {"heatmap_data": heatmap_data}


