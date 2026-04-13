FROM python:3.14-slim

WORKDIR /app

# Install uv
RUN pip install uv

# Copy dependency files first
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev

# Copy source code
COPY . .

#  Expose Port
EXPOSE 8000

# Run it
CMD [ "uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000" ]
