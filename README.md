# Database Queries

## Topics

- Relational Databases
- Writing Basic SQL Queries
- Writing Basic Queries using Knex.js

## Assignment

For this lab you will:

- write SQL statements against a pre-populated database using an online tool. Once you have the correct SQL Statement for each query, write it inside the `queries.md` file under the appropriate heading.
- write API endpoints to manage the `accounts` resource, including database logic

### Write Basic Queries

Visit [SQL Try Editor at W3Schools.com](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top) using the **Google Chrome (or Chromium if you use Linux) browser** and write _SQL queries_ for the following requirements:

- find all customers with postal code 1010. Returns 3 records.
- find the phone number for the supplier with the id 11. Should be (010) 9984510.
- list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.
- find all customers that live in London, Madrid, or Brazil. Returns 18 records.
- add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.
- update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.

**Clicking the `Restore Database` button in the page will repopulate the database with the original data and discard all changes you have made**.

### Write Accounts API

- Write CRUD endpoints for the `accounts` resource. Use the `db` object imported from `data/dbConfig.js` for database access via `knex`.
- Manually test your endpoints with a REST client like `Insomnia` or `Postman` to check they are working as expected.

#### Accounts Schema

| field  | data type        | metadata                                            |
| ------ | ---------------- | --------------------------------------------------- |
| id     | unsigned integer | primary key, auto-increments, generated by database |
| name   | string           | required, unique                                    |
| budget | numeric          | required                                            |

## Stretch Problems

The following exercises **require research**, the concepts needed to complete them have not been covered in class yet.

- Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted. Should be 69.
- Find all suppliers who have names longer than 20 characters. Returns 11 records.
- Add a `query string` option to your `GET /api/accounts` endpoint. The `query string` may contain `limit`, `sortby` and `sortdir` keys. If these keys are provided, use these values to limit and sort the `accounts` which are selected from the database. Reference the docs for sorting and limiting in `knex`.

```js
// sample req.query object
{
  limit: 5,
  sorBby: 'id',
  sortDir: 'desc'
}
```
