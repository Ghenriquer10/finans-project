import * as C from './style';
import about from '../../assets/saiba.png'
export default function ContentMiddle(){
    return(
        <C.Container>
            <C.FirstContent>
                <div className='about'>
                    <h1>Saiba para onde vai o seu dinheiro!</h1>
                    <p>Com o FINANS, você categoriza todos os seus lançamentos, com gráficos simples, você sabe de onde vem e para onde vai o seu dinheiro.</p>
                    <button>Saiba mais...</button>
                </div>
                <div className='about-image'><img src={about} alt='saiba mais'/></div>
            </C.FirstContent>
        </C.Container>
    )
}