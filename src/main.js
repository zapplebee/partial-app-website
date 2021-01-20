import * as React from 'react'
import { hydrate } from 'react-dom'

import { FooterBody } from './../mdx-renderer'

hydrate(<FooterBody />, document.querySelector('footer'))