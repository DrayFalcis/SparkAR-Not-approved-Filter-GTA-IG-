/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in module
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');


// Use export keyword to make a symbol available in scripting debug console
//export const Diagnostics = require('Diagnostics');

const directionalLight = Scene.root.find('directionalLight0');
var Money = Scene.root.find('Money');
var Score = Patches.getScalarValue('Score');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;
Money.text = Score.toString();
// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
