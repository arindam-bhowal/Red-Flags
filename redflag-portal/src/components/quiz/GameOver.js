import styled from 'styled-components'
import { Button } from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({ pts }) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Game Over</Title>
            <Points>You did {pts/5} out of 5!</Points>
            <Points>Average Score for Switzerland 3.29 ({`According to Yale & Meta`}) </Points>
            <Button onClick={refreshPage}>Retry</Button>
        </>
    )
}

export default GameOver
