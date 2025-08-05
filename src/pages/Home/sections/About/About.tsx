import BackgroundEffect from "../../../../components/Effects/BackgroundEffect"

const About = () =>{
    return(
        <>
        <BackgroundEffect />
            <div style={{ position: 'relative', height: '100vh' }}>
            <BackgroundEffect />
            <h1 style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>Testando fundo</h1>
            </div>
        </>
    )
}

export default About