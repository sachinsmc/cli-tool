#!/usr/bin/env node

console.log('Hello, world!');

var chalk = require('chalk');
var program = require('commander');
program
 .arguments('<file>')
 .option('-u, --username <username>', 'The user to authenticate as')
 .option('-p, --password <password>', 'The user\'s password')
 .option('-n, --name <name>', 'The user\'s full name')
 .action(function(file) {
   console.log('user: %s pass: %s file: %s',
       program.username, program.password, file);
 })
 .parse(process.argv);

console.log(chalk.bold.cyan('Author: Sachin Chavan'))
console.log(chalk.green('Designation: Software Developer'))