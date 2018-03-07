import React from 'react'
import { storiesOf } from '@storybook/react'

import Ad from './Ad'

storiesOf('Ad', module)
  .addDecorator(story => <div className="col-4">{story()}</div>)
  .add('default', () => <Ad />)
