import React from 'react'
import App from 'components/App'
import { shallow } from 'enzyme'

describe('(Component) App', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<App />)
  })

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Training Seed Project is Running!/)
  })
})