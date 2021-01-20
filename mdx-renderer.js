import React from 'react'
import ReactDom from 'react-dom/server'
import MDX from '@mdx-js/runtime'

import tw, { styled } from 'twin.macro'

const H1 = styled.h1(() => [
    tw`p-4 border text-xl font-bold text-purple`,
])

const Blockquote = styled.blockquote(() => [
    tw`p-4 italic border-l-4 bg-gray text-green-200`
])

const Ul = styled.ul(() => () => [
    tw`list-disc p-4`,
])


const Li = styled.li(() => () => [
    tw`p-4`,
])

export const name = 'mdx-it'
export const outputFormat = 'html'
export const inputFormats = ['mdx-it', 'markdown', 'md', 'mdx']




export const render = function (str, options) {

    const mdx = `${str}`


    const components = {
        h1: H1,
        blockquote: Blockquote,
        ul: Ul,
        li: Li
    }

    console.log(options)
    const scope = { ...options }

    return ReactDom.renderToStaticMarkup(<MDX components={components} scope={scope}>
        {mdx}
    </MDX>)
}