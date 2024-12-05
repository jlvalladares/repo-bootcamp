# Ejercicion planteados en la pagina: https://sqlbolt.com/

## Solucion al ejercicio 1: SQL Lesson 1: SELECT queries 101.

#### Task1: `SELECT Title FROMmovies;`

#### Task2: `SELECT Director FROM movies;`

#### Task3: `SELECT title,director FROM movies;`

#### Task4: `SELECT title, year FROM movies;`

#### Task5: `SELECT * FROM movies;`

## SQL Lesson 2: Queries with constraints (Pt. 1).

#### Task1: `SELECT title FROM movies where id IN (6);`

#### Task2: `SELECT title FROM movies where year between 2000 and 2010;`

#### Task3: `SELECT title FROM movies where year not between 2000 and 2010;`

#### Task4: `SELECT title,year FROM movies where id <=5;`

## SQL Lesson 3: Queries with constraints (Pt. 2).

#### Task1: `SELECT title FROM movies where title like 'toy%';`

#### Task2: `SELECT title FROM movies where director like 'joh%';`

#### Task3: `SELECT title FROM movies where director not like 'joh%';`

#### Task4: `SELECT * FROM movies where title like 'wall-_';`

## SQL Lesson 4: Filtering and sorting Query results.

#### Task1: `SELECT DISTINCT director FROM movies order by director asc;`

#### Task2: `select * from Movies order by year desc limit 4;`

#### Task3: `select title from movies order by title limit 5;`

#### Task4: `select title from movies order by title limit 5 offset 5;`

## SQL Review: Simple SELECT Queries

#### Task1: `SELECT * FROM north_american_cities where country like 'canada';`

#### Task2: `SELECT * FROM north_american_cities where country like 'uni%' order by latitude desc;`

#### Task3: ``
