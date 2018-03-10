import { scale, slugToId } from '../String'

describe('#slugToId', () => {
  it('exists', () => {
    expect(slugToId).toBeDefined()
  })

  it('returns slug when string has slug at the end', () => {
    expect(slugToId.call('clon_z6be5')).toEqual('z6be5')
  })

  it('returns empty if has not id', () => {
    expect(slugToId.call('clon_')).toEqual('')
  })
})

describe('#scale', () => {
  it('exists', () => {
    expect(scale).toBeDefined()
  })

  it('returns original url if is not kn3', () => {
    const url = 'https://k60.net/taringa/F/4/3/9/9/B/865.jpg'

    expect(scale.call(url)).toEqual(url)
  })

  it('returns url including width and height', () => {
    const url = 'https://k60.kn3.net/taringa/F/4/3/9/9/B/865.jpg'
    const expected = 'https://k60.kn3.net/taringa/F/4/3/9/9/B/30x40_865.jpg'

    expect(scale.call(url, 30, 40)).toEqual(expected)
  })

  it('returns url with same size if only width is given', () => {
    const url = 'https://k60.kn3.net/taringa/F/4/3/9/9/B/865.jpg'
    const expected = 'https://k60.kn3.net/taringa/F/4/3/9/9/B/30x30_865.jpg'

    expect(scale.call(url, 30)).toEqual(expected)
  })
})
