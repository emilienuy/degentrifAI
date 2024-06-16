from sqlalchemy import Column, Integer, Float
from .database import Base

class CensusData(Base):
    __tablename__ = "census_data"
    id = Column(Integer, primary_key=True, index=True)
    year = Column(Integer)
    feature1 = Column(Float)
    feature2 = Column(Float)
    # Add more features as needed
