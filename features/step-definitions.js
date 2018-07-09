/* eslint-disable no-unused-expressions */

import hnpage from '../pages/hnpage'
import {Given, When, Then} from 'cucumber'

Given(/^I visit homepage$/, function () {
  hnpage.open()
  hnpage.getTitle().should.equal('React HN')
})

Then(/^I should see page (header|content|footer)$/, function (element) {
  switch (element) {
    case 'header':
      hnpage.isHeaderVisible().should.be.true
      break
    case 'content':
      hnpage.isContentVisible().should.be.true
      break
    case 'footer':
      hnpage.isFooterVisible().should.be.true
  }
})

Then(/^I should be presented with (\d*) items$/, function (count) {
  this.itemTitles = hnpage.getItemsTitle()
  this.itemTitles.length.should.equal(parseInt(count))
})

When(/^I click More Link$/, function () {
  hnpage.clickNext()
})

Then(/^I should be presented with (\d*) new items$/, function (count) {
  let newItemTitles = hnpage.getItemsTitle()
  let oldItemTitles = this.itemTitles
  newItemTitles.length.should.equal(parseInt(count))
  expect(newItemTitles).to.not.have.all.members(oldItemTitles)
})
