CREATE TABLE IF NOT EXISTS gardens (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    size INTEGER NOT NULL,
    members TEXT[],
    user_sub TEXT NOT NULL, -- User's auth0 key
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);