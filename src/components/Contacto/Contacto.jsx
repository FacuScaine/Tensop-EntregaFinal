import './Contacto.css';

function Contacto() {
    return (
        <>
            <h1>Contacto</h1><main className="contacto">
                <form action="https://formsubmit.co/facusca@gmail.com" method="POST">
                    <div>
                        <label for="nombre">Nombre: </label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required></input>
                    </div>
                    <div>
                        <label for="telefono">Telefono: </label>
                        <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su numero" required></input>
                    </div>
                    <div>
                        <label for="email">Email: </label>
                        <input type="email" id="email" name="email" placeholder="Ingrese su email" required></input>
                    </div>
                    <div>
                        <textarea name="comentarios" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <input className="enviar" type="submit" value="Enviar"></input>
                </form>

                <div className="ubicacion">
                    <iframe
                        title='Ubicacion' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6636758913205!2d-58.43578838519583!3d-34.587375664139735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58eb2e52ae9%3A0xe3a7a47dd4206946!2sGodoy%20Cruz%201727%2C%20C1414CYK%20CABA!5e0!3m2!1ses-419!2sar!4v1650997005124!5m2!1ses-419!2sar"
                        width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

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