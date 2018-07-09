import Page from './page'
/**
 * Specify page element selectors in constructor
 */
class HNPage extends Page {
  constructor () {
    super()
    this.headerContainer = '.App__header'
    this.itemsContainer = '.App__content'
    this.footerContainer = '.App__footer'
    this.itemTitle = '.App__content .Items .Items__list .ListItem .Item__title'
    this.nextPageLink = '.Paginator__next'
  }

  /**
   * Page Methods
   */
  open () {
    super.open('http://localhost:5000')
  }

  clickNext () {
    browser.click(this.nextPageLink)
  }

  getTitle () {
    return browser.getTitle()
  }

  getItemsTitle () {
    browser.waitForVisible(this.itemTitle, 5000)
    return browser.getText(this.itemTitle)
  }

  isHeaderVisible () {
    return browser.isVisible(this.headerContainer)
  }

  isContentVisible () {
    return browser.isVisible(this.itemsContainer)
  }

  isFooterVisible () {
    return browser.isVisible(this.footerContainer)
  }
}

export default new HNPage()
