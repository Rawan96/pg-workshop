BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    location TEXT NOT NULL
);

INSERT INTO users (name,location) VALUES
('Moahmmed','GAZA'),
('Sara', 'Syria'),
('ALi','London');
 
COMMIT;