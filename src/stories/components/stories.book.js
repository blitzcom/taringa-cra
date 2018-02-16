import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { story } from './story.data'
import StoryContent from './StoryContent'

storiesOf('StoryContent', module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">
        <div className="col-8">{story()}</div>
      </div>
    </div>
  ))
  .add('default', () => <StoryContent {...story} status="success" />)
  .add('with placeholder', () => <StoryContent status="fetching" />)
