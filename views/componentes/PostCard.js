export function PostCard(props) {
    let {titulo,descripcion} = props;

    return `    
        <article>
            <a href="#openModal" class="UpdatePost">
                <h2> ${titulo} </h2>
                <p>
                    ${descripcion}
                </p>            
            </a>
        </article>
    `;

}