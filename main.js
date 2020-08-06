'use strict'

const url = 'https://api.unsplash.com/photos/random/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const url1 = 'https://api.unsplash.com/photos/random/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';

const featureName = 'feature_product_wrap';
const saleName = 'sale_product_wrap';
const newName = 'new_product_wrap'; 

function Slider (nameId, url) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.img = document.createElement('img');
    this.img.alt = 'slider_pic';
    this.div.appendChild(this.img);
    this.container.appendChild(this.div);
    this.url = url;

    this.photoFetch = function (url) {
        fetch(url)
        .then(response => response.json())
        .then(json => this.img.src = json.urls.small)
    }.bind(this);
    this.photoFetch(this.url);
}

new Slider ('#slider', url);
new Slider ('#promo_wrap', url1);

function Product (nameId, url, className) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.h1 = document.createElement('h1');
    this.h1.innerHTML = 'check engine featured product';
    this.div.appendChild(this.h1)
    this.container.appendChild(this.div);
}

new Product ('#featured_product');
new Product ('#new_product');
new Product ('#sale_product');