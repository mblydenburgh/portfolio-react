import { Selector } from 'testcafe'

fixture`first test`
  .page `https://portfolio-mb.herokuapp.com/`

test('contact links open', async t => {
  await t
  .click("#root > div > div.sc-bdVaJa.ghTIKQ > ul > li:nth-child(3) > a")
  .expect(Selector('#github').getAttribute('href'))
  .eql('https://github.com/mikebly')
  .expect(Selector('#profile-link').getAttribute('href'))
  .eql('https://www.freecodecamp.org/mikebly')
  .expect(Selector('#codepen').getAttribute('href'))
  .eql("https://codepen.io/mikebly/")
  .expect(Selector('#linkedin').getAttribute('href'))
  .eql("https://www.linkedin.com/in/michael-blydenburgh-99a68872/")
})

test('mobile layout triggers on resize', async t => {
  await t
  .resizeWindow(375,667)
  .expect(Selector('.carousel').visible).ok()
})