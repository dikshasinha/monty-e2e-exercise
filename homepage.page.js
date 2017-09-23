import { config } from '../wdio.conf'

const brandLogo = '.BrandLogo-img'

export const goToPage = () => {
    browser.url('/')
}

export const hasLogo = () => browser.isVisible(brandLogo)