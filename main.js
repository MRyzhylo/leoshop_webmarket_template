'use strict'

const sliderUrl = 'https://api.unsplash.com/photos/random/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const promoUrl = 'https://api.unsplash.com/photos/random/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const featureProdUrl = 'https://api.unsplash.com/photos/?page=1&per_page=9&client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const saleProdUrl = 'https://api.unsplash.com/photos/?page=5&per_page=3&client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const newProdUrl = 'https://api.unsplash.com/photos/?page=10&per_page=3&client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';

const mainSlider = 'slider_wrap';
const promoSlider = 'promo_slider';
const featureName = 'feature_product_wrap';
const saleName = 'sale_product_wrap';
const newName = 'new_product_wrap'; 

function Slider (nameId, url, className) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.div.className = className;
    this.img = document.createElement('img');
    this.img.alt = 'slider_pic';
    this.prevBtn = document.createElement('button');
    this.nextBtn = document.createElement('button');
    this.prevBtn.innerHTML = '&#60;';
    this.nextBtn.innerHTML = '&#62;';
    this.div.appendChild(this.img);
    this.div.appendChild(this.prevBtn);
    this.div.appendChild(this.nextBtn);
    this.container.appendChild(this.div);
    this.url = url;

    this.photoFetch = function (url) {
        fetch(url)
        .then(response => response.json())
        .then(json => this.img.src = json.urls.small)
    }.bind(this);
    this.photoFetch(this.url)

    this.prev = function () {
        this.photoFetch(this.url);
    }.bind(this);
    this.prevBtn.onclick = this.prev;
    
    this.next = function () {
        this.photoFetch(this.url);
    }.bind(this);
    this.nextBtn.onclick = this.next;
}

new Slider ('#slider', sliderUrl, mainSlider);
new Slider ('#promo_wrap', promoUrl, promoSlider)

function Product (nameId, url, className) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.div.className = className;
    this.container.appendChild(this.div);
    this.url = url
    

    this.photoFetch = function (url) {
        fetch(url)
        .then(response => response.json())
        .then(json => json.map(img => `<img src="${img.urls.small}">`))
        .then(result => this.div.innerHTML = result)
    }.bind(this);
    this.photoFetch(this.url);
}

new Product ('#featured_product', featureProdUrl, featureName);
new Product ('#new_product', newProdUrl, newName);
new Product ('#sale_product', saleProdUrl, saleName);