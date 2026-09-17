from fastapi import FastAPI

app = FastAPI(
    title="RealityForge API",
    version="0.1.0",
    description="Scenario simulation and decision analysis platform",
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "realityforge-api",
        "version": "0.1.0",
    }