# schemas.py
from pydantic import BaseModel
from typing import List, Optional

class PredictionRequest(BaseModel):
    year: int
    feature1: float
    feature2: float
    # Add more features as needed

class PredictionResponse(BaseModel):
    predictions: List[int]
    accuracy: Optional[float] = None

