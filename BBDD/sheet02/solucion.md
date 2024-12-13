## Ejercicio 1:

1. Selecciona todos los registros de una tabla:
   Consulta todas los datos de la tabla film .

### Solución:

`SELECT _ FROM film;` \
`SELECT COUNT(_) AS cantidad FROM film;`

## Ejercicio 2:

1. Encuentra todas las películas con una duración ( length ) mayor a 120 minutos.

### Solución:

`SELECT title FROM film WHERE length>120;` \
`SELECT COUNT(title) AS cantidad FROM film WHERE length>120;`

2. Busca clientes cuyo apellido sea "Smith" en la tabla customer .

### Solucion:

`SELECT * FROM customer WHERE last_name = 'SMITH';`

## Ejercicio 3:

1. Ordena las películas de film alfabéticamente por el título.

### Solución:

`SELECT * FROM film ORDER BY title asc;`

2. Ordena las películas por duración de mayor a menor.

### Solución:

`SELECT * FROM film ORDER BY length asc;`

## Ejercico 4:

1. Cuenta cuántos actores hay en la tabla actor .

### Solución:

`SELECT COUNT(*) AS cantidad_actores FROM actor;`

2. Encuentra la duración promedio de las películas en la tabla film .

### Solución:

`SELECT AVG(length) AS duraciion_promedio FROM film;`

## Ejercicio 5:

1. Encuentra todas las películas con una clasificación ( rating ) de 'PG' o 'R'.

### Solución:

`SELECT title FROM film WHERE rating='PG' OR rating='R';` 2. Muestra los clientes con last_name que terminen en "FORD".

### Solución:

`SELECT customer_id, first_name FROM customer WHERE last_name LIKE '%FORD';`
