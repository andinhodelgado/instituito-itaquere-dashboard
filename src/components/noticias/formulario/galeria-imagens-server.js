import { 
    Card,
    Image,
    Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as constants from '../../../utils/constants';

function GaleriaImagensServer(props) {

    const URL_IMG = constants.URL_BASE + constants.LOCAL_IMG;

    function handleExcluirImagem(event, codigo){
        event.preventDefault();
        props.handleGaleriaImagensServer(codigo);
    }

    return ( 
        props.imagens.map(img => 
            <Card 
                key= {img.codigo}
                style={{ 
                    width: '18rem',
                    margin: '10px',
                    float: 'left' }}>
                <Card.Header >
                    <Button 
                        onClick={(event) => handleExcluirImagem(event, img.codigo)} 
                        variant="danger"
                        style={{ 
                            width: '100%'}}>
                        Excluir
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Image 
                        src={URL_IMG + img.image}
                        style={{ 
                            width: '15rem' }}/>
                </Card.Body>
            </Card>
        )
    );
}

GaleriaImagensServer.propTypes = {
    imagens: PropTypes.array.isRequired,
    handleGaleriaImagensServer: PropTypes.func.isRequired
}

export default GaleriaImagensServer;