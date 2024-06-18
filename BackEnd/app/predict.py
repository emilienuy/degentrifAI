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

# predict.py
import pandas as pd
import xgboost as xgb
from sklearn.metrics import accuracy_score
from .preprocess import preprocess

def predict_gentrification(request, model):
    # Convert request to DataFrame
    data_dict = request.dict()
    data = pd.DataFrame([data_dict])
    
    # Preprocess the data
    processed_data = preprocess(data)
    
    # Define features and target
    X = processed_data.drop('target_column', axis=1)  # Replace 'target_column' with the actual target column name
    y = processed_data['target_column']  # Same as above
    
    # Convert to DMatrix (XGBoost's internal data structure)
    dmatrix = xgb.DMatrix(X)
    
    # Make predictions
    y_pred_prob = model.predict(dmatrix)
    y_pred = y_pred_prob.argmax(axis=1)
    
    # Evaluate accuracy (Optional, not needed for real-time prediction)
    accuracy = accuracy_score(y, y_pred)
    
    return {"predictions": y_pred.tolist(), "accuracy": accuracy}
