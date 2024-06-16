from pydantic import BaseModel

class PredictionRequest(BaseModel):
    # Define your input schema
    pass

class PredictionResponse(BaseModel):
    predictions: list
    accuracy: float
