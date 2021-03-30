import Link from 'next/link'
export default function Timeline({userName}){
    return (
        <>
            <h1>este es el time line jeje mas na a {userName}</h1>
            <Link href="/"><a>ir a casa de un pendejo</a></Link>
            <style jsx>{'h1{background: black;color:pink}'}</style>
        </>
    )
}
Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
}