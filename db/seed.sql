DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE restaurants;

\c restaurants;

CREATE TABLE areas (
    area_id SERIAL PRIMARY KEY,
    area_name VARCHAR(50)
);

CREATE TABLE restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(50),
    area_id INT REFERENCES areas(area_id),
    cuisine VARCHAR(50),
    website VARCHAR(50)
);

CREATE TABLE comments (
    comments_id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(restaurant_id),
    comment VARCHAR(200),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ratings (
    rating_id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(restaurant_id),
    rating INT CHECK (rating <= 5),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO areas(area_name) VALUES('York'), ('Levenshulme');
-- SELECT * FROM areas;

INSERT INTO restaurants(
    restaurant_name, 
    area_id, 
    cuisine, 
    website
    ) 
    VALUES (
    'Donner Summer',
    1,
    'turkish',
    'donnersummer.co.uk'
    ), (
    'Nordie',
    2,
    'cafe bar',
    'nordie.co.uk'
    ), (
    'Coconut Lagoon',
    1,
    'indian',
    'coconutlagoon.co.uk'
    );


-- SELECT * FROM restaurants;

INSERT INTO comments(restaurant_id, comment) VALUES (
    2, 
    'Nordie is a term referring to Nothern Irish ... NOT a reference to nordic countries'
), (
    1,
    'Veeeery tasty :)'
);

-- SELECT * FROM comments;

INSERT INTO ratings(restaurant_id, rating) VALUES (
    1, 
    5
), (
    2,
    3
), (
    3,
    4
);

-- SELECT * FROM ratings;

