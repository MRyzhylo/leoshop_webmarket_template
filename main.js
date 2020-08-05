'use strict'

function Slider (nameId) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.h1 = document.createElement('h1');
    this.h1.innerHTML = 'check engine slider';
    this.div.appendChild(this.h1)
    this.container.appendChild(this.div);
}

new Slider ('#slider');

function FeaturedProduct (nameId) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.h1 = document.createElement('h1');
    this.h1.innerHTML = 'check engine featured product';
    this.div.appendChild(this.h1)
    this.container.appendChild(this.div);
}

new FeaturedProduct ('#featured_product');

function NewProduct (nameId) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.h1 = document.createElement('h1');
    this.h1.innerHTML = 'check engine new product';
    this.div.appendChild(this.h1)
    this.container.appendChild(this.div);
}

new NewProduct ('#new_product');

function SaleProduct (nameId) {
    this.container = document.querySelector(nameId);
    this.div = document.createElement('div');
    this.h1 = document.createElement('h1');
    this.h1.innerHTML = 'check engine sale product';
    this.div.appendChild(this.h1)
    this.container.appendChild(this.div);
}

new SaleProduct ('#sale_product');