//const routes = require('express').Router();
const express = require("express");
const routes = require("express").Router();
const contacts = require("../routes/contacts/contacts");

routes.use("/contacts", contacts);

routes.get("/", (req, res) => {
	res.send("Hello world");
});

module.exports = routes;
