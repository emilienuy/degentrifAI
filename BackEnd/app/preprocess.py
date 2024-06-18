# import pandas as pd

# def preprocess(data_path):
#     # Implement data preprocessing logic
#     data = pd.read_csv(data_path)
#     # Preprocess data
#     return data

# preprocess.py
import pandas as pd

def preprocess(data: pd.DataFrame) -> pd.DataFrame:
    # Convert non-numeric values to NaN
    columns_to_convert = data.keys()
    for col in columns_to_convert:
        data[col] = pd.to_numeric(data[col], errors='coerce')
    
    # Fill missing values with the average
    for col in columns_to_convert:
        average_value = data[col].mean()
        data[col].fillna(average_value, inplace=True)
    
    # Create a new binary label column if applicable (you might not need this step)
    # median_value = data['target_column'].median()
    # data['target_column'] = (data['target_column'] > median_value).astype(int)
    
    # Convert specific columns to float
    data[columns_to_convert] = data[columns_to_convert].astype(float)
    
    return data


