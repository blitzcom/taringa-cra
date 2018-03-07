import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Summaries from './Summaries'
import Summary from './Summary'

import { normalizeStory } from '../utils'
import { image, text, link, article } from './data'

storiesOf('Summaries', module)
  .addDecorator(story => <div className="col-8">{story()}</div>)
  .add('default', () => <Summaries status="fetching" />)
  .add('listing', () => (
    <Summaries
      status="success"
      items={[
        normalizeStory(image),
        normalizeStory(text),
        normalizeStory(link),
        normalizeStory(article),
      ]}
    />
  ))
  .add('loading', () => (
    <Summaries status="fetching" items={[normalizeStory(image)]} />
  ))
  .add('with error', () => (
    <Summaries status="failure" items={[normalizeStory(image)]} />
  ))
  .add('with error and no summaries', () => <Summaries status="failure" />)

storiesOf('Summary', module)
  .addDecorator(story => <div className="col-8">{story()}</div>)
  .add('all default', () => (
    <div>
      <Summary size="settings/ITEM_SMALL" />
      <Summary size="settings/ITEM_MEDIUM" />
      <Summary size="settings/ITEM_BIG" />
    </div>
  ))
  .add('small', () => (
    <Summary {...normalizeStory(image)} size="settings/ITEM_SMALL" />
  ))
  .add('small with placeholder', () => (
    <Summary size="settings/ITEM_SMALL" isPlaceholder />
  ))
  .add('medium', () => (
    <Summary {...normalizeStory(image)} size="settings/ITEM_MEDIUM" />
  ))
  .add('medium with placeholder', () => (
    <Summary size="settings/ITEM_MEDIUM" isPlaceholder />
  ))
  .add('big', () => (
    <Summary {...normalizeStory(image)} size="settings/ITEM_BIG" />
  ))
  .add('big with placeholder', () => (
    <Summary size="settings/ITEM_BIG" isPlaceholder />
  ))
