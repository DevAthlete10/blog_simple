export function PostCard(props) {
    let {titulo,descripcion} = props;

    return `    

        <article>
            <h2> ${titulo} </h2>

            <p>
                Ver contenido
            </p>

        </article>
    `;

}