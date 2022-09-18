//const routes = require('express').Router();
const express = require("express");
const routes = require("express").Router();
const contacts = require("./contacts/contacts");

routes.use("/contacts", contacts);

routes.get("/", (req, res) => {
	res.send("Health check");
});

module.exports = routes;
