/*
* spec.js
*/
import { config } from '../wdio.conf'
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
chai.should();
import * as homePage from '../../pageObjects/homepage.page'
import * as searchProduct from '../../pageObjects/searchproduct.page'

'use strict';
const assert = require('assert');
const homePage = new homePage();
const searchProduct = new searchproduct();
const searchproduct = function () {
       
    
    this.Given(/^I am on the landing page$/, function () {
        homePage.goToPage()
    });

    this.And(/^I should search a product in searchbox$/, function (text) {
        return search.searchTextBox(text);
    });
    this.And(/^I should click search button$/, function () {
        return search.searchButton.click();
    });
    this.And(/^I should see the product list$/, function () {
        return product.productList();
    });
    this.When(/^I add the selected product to the basket$/, function () {
        return product.productbasket().should().BeTrue();
    });
 
};
module.exports = productdetail;
