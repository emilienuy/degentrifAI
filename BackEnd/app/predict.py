# import joblib
# from pydantic import BaseModel
# import pandas as pd

# class PredictionInput(BaseModel):
#     year: int
#     features: list

# model = joblib.load("backend/models/xgboost_model.pkl")

# def predict(input_data: PredictionInput):
#     data = pd.DataFrame([input_data.features], columns=['feature1', 'feature2', ...])
#     prediction = model.predict(data)
#     return prediction.tolist()

import pandas as pd
import xgboost as xgb
from sklearn.metrics import accuracy_score
from .preprocess import preprocess

def predict_gentrification(request, model, db):
    # Load and preprocess the data
    data = pd.read_csv('data/census_data.csv')
    processed_data = preprocess(data)
    
    # Define features and target
    X = processed_data.drop('Average value of dwellings ($) 2016', axis=1)
    y = processed_data['Average value of dwellings ($) 2016']
    
    # Convert to DMatrix (XGBoost's internal data structure)
    dmatrix = xgb.DMatrix(X)
    
    # Make predictions
    y_pred_prob = model.predict(dmatrix)
    y_pred = y_pred_prob.argmax(axis=1)
    
    # Evaluate accuracy (Optional, not needed for real-time prediction)
    accuracy = accuracy_score(y, y_pred)
    
    return {"predictions": y_pred.tolist(), "accuracy": accuracy}
