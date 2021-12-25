export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository?.name ?? 'God'}</strong>
            <p>{props.repository?.description ?? 'Forms in React'}</p>

            <a href={props.repository?.link ?? 'Acessar repositório'}>
                Acessar repositório 
            </a>
        </li>
    );
}