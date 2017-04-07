import test from 'ava'
import { shallow } from 'enzyme'
import React from 'react'

import Header from './Header'

const testWithWrapper = (t, tests) => {
  const wrapper = shallow(<Header />)

  tests(t, wrapper)
}

test(
  'should render correctly',
  testWithWrapper,
  (t, wrapper) => {
    t.true(wrapper.exists())
  }
)

test('should render styled component',
  testWithWrapper,
  (t, wrapper) => {
    t.is(wrapper.name(), 'styled.header')
  }
)
