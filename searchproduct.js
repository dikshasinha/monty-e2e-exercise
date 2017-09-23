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

const homePage = new homePage();
const searchProduct = new searchproduct();
const searchproduct = function () {

    'use strict';
    let webdriverIO = (webdriverIO);
    let browser = WebDriverIO.remote({

       });
    const search = new searchproduct

    this.Given(/^I am on the landing page$/, function () {
        homePage.goToPage()
    });

    this.When(/^I should search a product in searchbox$/, function (text) {
        return search.searchTextBox(text);
    });
    this.Then(/^I should click search button$/, function () {
        return search.searchButton.click();
    });
    this.Then(/^I should see the product list$/, function () {
        return product.productList();
    });

};

module.exports = searchproduct;