import { Link } from 'react-router-dom';

import '../styles/card.css';

const Card = ({name}) => {
    return(
        <div className='pokemon-card'>
            <link to={`/pokemon/${name}`}>{name}</Link>
        </div>
    );
};

export default Card;