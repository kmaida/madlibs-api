'use strict';

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const WORD_BANK = require('./wordBank.json');

/*
 |--------------------------------------
 | Internal
 |--------------------------------------
 */

const _randomIndex = (max) => Math.floor(Math.random() * max);

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

app.get('/api/', (req, res) => {
  res.send('API works!');
});

//------ GET Nouns

// noun: random (person, place, or thing)
app.get('/api/noun', (req, res) => {
  const nouns = WORD_BANK.nouns;
  let allNouns = [];

  for (const key in nouns) {
    if (nouns.hasOwnProperty(key)) {
      allNouns = [...allNouns, ...nouns[key]];
    }
  }
  let random = _randomIndex(allNouns.length);
  res.json(allNouns[random]);
});

// noun: person
app.get('/api/noun/person', (req, res) => {
  const nounsPerson = WORD_BANK.nouns.person;
  let random = _randomIndex(nounsPerson.length);
  res.json(nounsPerson[random]);
});

// noun: place
app.get('/api/noun/place', (req, res) => {
  const nounsPlace = WORD_BANK.nouns.place;
  let random = _randomIndex(nounsPlace.length);
  res.json(nounsPlace[random]);
});

// noun: thing
app.get('/api/noun/thing', (req, res) => {
  const nounsThing = WORD_BANK.nouns.thing;
  let random = _randomIndex(nounsThing.length);
  res.json(nounsThing[random]);
});

//------ GET Adjectives

// adjective: random
app.get('/api/adjective', (req, res) => {
  const adjectives = WORD_BANK.adjectives;
  let random = _randomIndex(adjectives.length);
  res.json(adjectives[random]);
});

//------ GET Verbs

// verb: present tense (-ing)
app.get('/api/verb/present', (req, res) => {
  const verbs = WORD_BANK.verbs.present;
  let random = _randomIndex(verbs.length);
  res.json(verbs[random]);
});

// verb: past tense (-ed)
app.get('/api/verb/past', (req, res) => {
  const verbs = WORD_BANK.verbs.past;
  let random = _randomIndex(verbs.length);
  res.json(verbs[random]);
});

//------ GET Navigation

// navigation: random
app.get('/api/navigation', (req, res) => {
  const navigation = WORD_BANK.navigation;
  let random = _randomIndex(navigation.length);
  res.json(navigation[random]);
});

//------ GET Pronouns

// pronoun object: random (male, female, neutral, plural)
app.get('/api/pronoun', (req, res) => {
  const pronouns = WORD_BANK.pronouns;
  let pronounKeys = [];

  for (const key in pronouns) {
    if (pronouns.hasOwnProperty(key)) {
      pronounKeys.push(key);
    }
  }
  let randomKey = pronounKeys[_randomIndex(pronounKeys.length)];
  res.json(pronouns[randomKey]);
});

// pronoun object: gendered (male, female)
app.get('/api/pronoun/gendered', (req, res) => {
  const pronouns = WORD_BANK.pronouns;
  let pronounKeys = [];

  for (const key in pronouns) {
    if (pronouns.hasOwnProperty(key) && key !== 'neutral' && key !== 'plural') {
      pronounKeys.push(key);
    }
  }
  let randomKey = pronounKeys[_randomIndex(pronounKeys.length)];
  res.json(pronouns[randomKey]);
});

// pronoun object: by id (male, female, neutral, plural)
app.get('/api/pronoun/:id', (req, res) => {
  const pronoun = WORD_BANK.pronouns[req.params.id];
  if (pronoun) {
    res.json(pronoun);
  } else {
    res.status(404).send({message: 'Could not find the requested pronoun.'})
  }
});

/*
 |--------------------------------------
 | Serve
 |--------------------------------------
 */

app.listen(8084);
console.log('Listening on localhost:8084');
