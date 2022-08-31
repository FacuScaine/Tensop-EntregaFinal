import './Contacto.css';

function Contacto() {
    return (
        <>
            <h1>Contacto</h1>
            <main className="contacto">
                <form action="https://formsubmit.co/facusca@gmail.com" method="POST">
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required></input>
                    </div>
                    <div>
                        <label htmlFor="telefono">Telefono: </label>
                        <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su numero" required></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" placeholder="Ingrese su email" required></input>
                    </div>
                    <div>
                        <textarea name="comentarios" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <input className="enviar" type="submit" value="Enviar"></input>
                </form>

                <div className="ubicacion">
                <iframe title='ubi' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.66367589132!2d-58.435788385195806!3d-34.58737566413974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58eb2e52ae9%3A0xe3a7a47dd4206946!2sGodoy%20Cruz%201727%2C%20C1414CYK%20CABA!5e0!3m2!1ses-419!2sar!4v1661645566971!5m2!1ses-419!2sar" width={400} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                </div>
                <div className="data">
                    <p>Direccion: <b>Godoy Cruz 1727, Buenos Aires</b></p>
                    <p>Email: <b>facusca@gmail.com</b></p>
                    <p>Tel: <b>11 3601-3722</b></p>
                </div>
            </main>
        </>

    )
};

export default Contacto