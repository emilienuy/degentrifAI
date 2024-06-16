import joblib
from pydantic import BaseModel
import pandas as pd

class PredictionInput(BaseModel):
    year: int
    features: list

model = joblib.load("backend/models/xgboost_model.pkl")

def predict(input_data: PredictionInput):
    data = pd.DataFrame([input_data.features], columns=['feature1', 'feature2', ...])
    prediction = model.predict(data)
    return prediction.tolist()
