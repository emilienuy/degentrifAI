from fastapi import FastAPI, Depends
from .schemas import PredictionRequest, PredictionResponse
from .predict import predict_gentrification
from .database import get_db
import joblib

app = FastAPI()

# Load the model at startup
model = joblib.load("models/xgboost_model.pkl")

@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest, db=Depends(get_db)):
    prediction = predict_gentrification(request, model, db)
    return prediction
