import * as React from 'react'
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

export function Footer() {
    return <footer ><FooterBody /></footer>
}

export function FooterBody() {

    const [clicks, setClicks] = React.useState(0)

    const doClick = React.useCallback(() => {
        console.log(clicks)
        setClicks(1 + clicks)
    }, [clicks, setClicks])

    return <div onClick={doClick}>this is some footer content{clicks > 0 && " " + clicks}</div>
}

const Header = () => <header>this is a title</header>
const Nav = () => <nav><a href="/">Home</a></nav>
const Container = ({ children }) => <div className='container'>{children}</div>


export function Document({ children }) {
    const components = {
        h1: H1,
        blockquote: Blockquote,
        ul: Ul,
        li: Li
    }

    return <>
        <Header />
        <Nav />
        <Container>
            <MDX components={components} suppressHydrationWarning={true}>
                {children}
            </MDX>
        </Container>
        <Footer />
    </>
}

export const render = function (mdx) {
    return ReactDom.renderToString(<Document>{mdx}</Document>)
}