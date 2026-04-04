from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="My Portfolio API")

# Configure CORS
origins = [
    "http://localhost:5173",  # Local Vite dev server
    "http://localhost:8000",  # Fallback
    "http://frontend:5173",  # Internal Docker network name (if frontend calls backend by name)
    "http://backend:8000",  # Internal Docker network name
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


@app.get("/")
def read_root():
    return {"message": "Portfolio API is running!"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}
