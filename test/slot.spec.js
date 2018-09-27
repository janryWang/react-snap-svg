import test from 'ava'
import './polyfill'
import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactSnap from '../src'

Enzyme.configure({ adapter: new Adapter() })

test('simple', t => {
  t.truthy(
    mount(
      <ReactSnap>
        {s => {
          s.circle(150, 150, 100).attr({
            fill: '#eee'
          })
        }}
      </ReactSnap>
    )
      .html()
      .indexOf(
        '<circle cx="150" cy="150" r="100" style="" fill="#eeeeee"></circle>'
      ) > -1
  )
})
