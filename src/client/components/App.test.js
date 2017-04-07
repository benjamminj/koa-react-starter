import React from 'react'
import { shallow } from 'enzyme'
import test from 'ava'

import App from './App'

test('should render without crashing', t => {
  const wrapper = shallow(<App />)
  console.log(wrapper)
  t.is(wrapper.text(), 'This is real life?')
})
