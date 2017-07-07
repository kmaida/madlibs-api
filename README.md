# madlibs-api

This is a small Node.js API that returns random words upon request.

## Requirements

* [Node.js](https://nodejs.org) with npm

## Installation

```
$ npm install
```

## Serve

```
$ node server.js
```

API runs at [http://localhost:8084/api/](http://localhost:8084/api/).

## Usage

* GET a noun (person, place, or thing): `/api/noun`
* GET a noun (person/animal): `/api/noun/person`
* GET a noun (place): `/api/noun/place`
* GET a noun (thing): `/api/noun/thing`
* GET an adjective: `/api/adjective`
* GET a verb (present-tense; `-ing`): `/api/verb/present`
* GET a verb (past-tense; `-ed`): `/api/verb/past`
* GET random navigation (ie., `up`, `down`, `back`, etc.): `/api/navigation`
* GET a random pronoun object: `/api/pronoun`
* GET a random pronoun object that is _not_ "it": `/api/pronoun/gendered` (`male`, `female`)
* GET a pronoun object by ID: `/api/pronoun/:id` (`male`, `female`, `neutral`, `plural`)
