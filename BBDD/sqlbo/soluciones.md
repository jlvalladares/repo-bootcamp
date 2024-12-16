# Ejercicion planteados en la pagina: https://sqlbolt.com/

## Solucion al ejercicio 1: SQL Lesson 1: SELECT queries 101.

#### Task1:

`SELECT Title FROM movies;`

#### Task2:

`SELECT Director FROM movies;`

#### Task3:

`SELECT title,director FROM movies;`

#### Task4:

`SELECT title, year FROM movies;`

#### Task5:

`SELECT * FROM movies;`

## SQL Lesson 2: Queries with constraints (Pt. 1).

#### Task1:

`SELECT title FROM movies where id IN (6);`

#### Task2:

`SELECT title FROM movies where year between 2000 and 2010;`

#### Task3:

`SELECT title FROM movies where year not between 2000 and 2010;`

#### Task4:

`SELECT title,year FROM movies where id <=5;`

## SQL Lesson 3: Queries with constraints (Pt. 2).

#### Task1:

`SELECT title FROM movies where title like 'toy%';`

#### Task2:

`SELECT title FROM movies where director like 'joh%';`

#### Task3:

`SELECT title FROM movies where director not like 'joh%';`

#### Task4:

`SELECT * FROM movies where title like 'wall-_';`

## SQL Lesson 4: Filtering and sorting Query results.

#### Task1:

`SELECT DISTINCT director FROM movies order by director asc;`

#### Task2:

`select * from Movies order by year desc limit 4;`

#### Task3:

`select title from movies order by title limit 5;`

#### Task4:

`select title from movies order by title limit 5 offset 5;`

## SQL Review: Simple SELECT Queries

#### Task1:

`SELECT city, population FROM north_american_cities where country='Canada';`

#### Task2:

`SELECT * FROM north_american_cities where country like 'uni%' order by latitude desc;`

#### Task3:

`SELECT city,longitude FROM north_american_cities where longitude<-87.62 order by longitude desc;`

#### Task4:

`SELECT city, population FROM north_american_cities where country='Mexico' order by population desc limit 2;`

#### Task5:

`SELECT city, population FROM north_american_cities where country='United States' order by population desc limit 2 offset 2;`

## SQL Lesson 6: Multi-table queries with JOINs

#### Task1:

`SELECT title, domestic_sales, international_sales FROM Movies INNER JOIN Boxoffice ON Movies.Id = Boxoffice.Movie_id;`

#### Task2:

`SELECT title, international_sales, domestic_sales FROM movies INNER JOIN boxoffice ON Movies.id = Boxoffice Movie_id where international_sales>domestic_sales;`

#### Task3: `SELECT title, rating FROM movies inner join boxoffice on movies.id = boxoffice.movie_id order by rating desc;`

## SQL Lesson 7: OUTER JOINs

#### Task1: `SELECT distinct building FROM employees;`

#### Task2: `SELECT * FROM buildings;`

#### Task3: `SELECT DISTINCT building_name, role FROM buildings left join employees on building_name=building;`

## SQL Lesson 8: A short note on NULLs

#### Task1: `SELECT name, role FROM employees where building is null;`

#### Task2: `SELECT building_name FROM buildings LEFT JOIN employees ON building_name = building where role is null;`

## SQL Lesson 9: Queries with expressions

### Task1:

`SELECT title, (domestic_sales+international_sales)/1000000 AS sales FROM movies INNER JOIN boxoffice ON movies.id = boxoffice.movie_id;`

### Task2:

`SELECT title, (rating*10) AS rating_percent FROM movies JOIN boxoffice ON movies.id = boxoffice.movie_id;`

### Task3:

`SELECT title, year FROM movies where year%2=0;`

## SQL Lesson 10: Queries with aggregates (Pt. 1)

### Task 1:

`SELECT MAX(years_employed) AS max_años_empleado FROM employees;`

### Task 2:

`SELECT role, AVG(years_employed) FROM employees GROUP BY role;`

### Task 3:

`SELECT building, SUM(years_employed) FROM employees GROUP BY building;`

## SQL Lesson 11: Queries with aggregates (Pt. 2)

### Task 1:

`SELECT role,COUNT(*) FROM employees WHERE role='Artist';`

### Task 2:

`SELECT role, COUNT(*) AS total_empleados FROM employees GROUP BY role;`

### Task 3:

`SELECT role, SUM(years_employed) FROM employees WHERE role='Engineer';`
