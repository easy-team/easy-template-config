
'use strict';
const path = require('path');
const inquirer = require('inquirer');
const cwd = process.cwd();

exports.componentAllChoice = [
  {
    name: 'react-component',
    dist: path.resolve(cwd, 'src/component')
  },
  {
    name: 'react-hook-component',
    dist: path.resolve(cwd, 'src/component')
  },
  {
    name: 'react-redux',
    dist: path.resolve(cwd, 'src/store')
  },
  {
    name: 'react-router',
    dist: path.resolve(cwd, 'src/router')
  },
  new inquirer.Separator(),
  {
    name: 'vue-component',
    dist: path.resolve(cwd, 'src/component')
  },
  {
    name: 'vue-store',
    dist: path.resolve(cwd, 'src/store')
  },
  {
    name: 'vue-router',
    dist: path.resolve(cwd, 'src/router')
  },
  new inquirer.Separator(),
  {
    name: 'egg-controller',
    dist: path.resolve(cwd, 'app/controller')
  },
  {
    name: 'egg-middleware',
    dist: path.resolve(cwd, 'app/middleware')
  },
  {
    name: 'egg-service',
    dist: path.resolve(cwd, 'app/service')
  },
  new inquirer.Separator(),
  {
    name: 'webpack-config-react',
    filename: 'webpack.config.js',
    dist: cwd
  },
  {
    name: 'webpack-config-vue',
    filename: 'webpack.config.js',
    dist: cwd
  },
  new inquirer.Separator(),
  {
    name: 'eslint-vue',
    filename: '.eslintrc.js',
    dist: cwd
  },
  {
    name: 'eslint-react',
    filename: '.eslintrc.js',
    dist: cwd
  },
  {
    name: 'babel',
    filename: 'babel.config.js',
    dist: cwd
  },
  {
    name: 'tsconfig',
    filename: 'tsconfig.json',
    dist: cwd
  },
  {
    name: 'package',
    filename: 'package.json',
    dist: cwd
  },
  new inquirer.Separator()
];
