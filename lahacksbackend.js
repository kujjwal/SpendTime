var cards;

var firebase = require("firebase");
import * as firebase from "firebase";

var storage = firebase.storage();
var stRef = storage.ref();
var stRef2 = storage.ref();
for (var i = 0; i < cards.length; i++) {
	var img;
	var doc;
	stRef.child('Cards' + i + ": Image").getDownloadURL().then(function(url) 
	{	// `url` is the download URL for image
  		// This can be downloaded directly:
  		var xhr = new XMLHttpRequest();
  		xhr.responseType = 'blob';
  		xhr.onload = function(event) {
    		var blob = xhr.response;
  		};
  		xhr.open('GET', url);
  		xhr.send();
  		// Or inserted into an <img> element:
  		img = document.getElementById('myimg');
  		img.src = url;	
	}).catch(function(error) {});
	stRef2.child('Cards' + i).getDownloadURL().then(function(url) {
		var xhr = new XMLHttpRequest();
  		xhr.responseType = 'blob';
  		xhr.onload = function(event) {
    		var blob = xhr.response;
  		};
  		xhr.open('GET', url);
  		xhr.send();
  		// Or inserted into an <img> element:
  		doc = document.getElementById('text');
	}).catch(function(error) {});
	/*Put it together to form a Card Data Type, then put into the machine
	learning algorithm.*/
}

function Card(){
	Card.prototype()
	var object = new Cus;
}


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAaBM_P5uW1zh_1EkbdRz-Q3oxC-XD7u5I",
  authDomain: "la-hacks-server.firebaseapp.com",
  databaseURL: "https://la-hacks-server.firebaseio.com",
  projectId: "la-hacks-server",
  storageBucket: "la-hacks-server.appspot.com",
  messagingSenderId: "392255756249"
};
firebase.initializeApp(config);