import React from 'react'
import Button from '../../src/components/Button'
import renderer from 'react-test-renderer'

test('should render button', () => {
  const buttonTree = renderer.create(<Button label='Potatoe' />).toJSON()
  expect(buttonTree).toMatchSnapshot()
})
