import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import './utils'

Enzyme.configure({ adapter: new Adapter() })

global.mount = mount
global.renderer = renderer
global.shallow = shallow
