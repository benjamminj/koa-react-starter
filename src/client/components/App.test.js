import React from 'react'
import { shallow } from 'enzyme'
import test from 'ava'

import App from './App'

test('should render without crashing', t => {
  const wrapper = shallow(<App />)
  t.true(wrapper.exists())
})
