import React from 'react'
import questions from './questions'
import Radio from './Radio';

const Exercicio9 = () => {
    const [respostas, setRespostas] = React.useState(questions.reduce((acc, question) => { 
        return{
            ...acc, [question.id] : "",
        }
    }, {} ));
    const [slide, setSlide] = React.useState(0);
    const [result, setResult] = React.useState(null);
        

    function handleChange({target}) {
       setRespostas({...respostas, [target.id] : target.value });
    }

    function finalResult(){
        const correct = questions.filter(({id, resposta}) => respostas[id] === resposta);
        setResult(`Você acertou ${correct.length} de ${questions.length}`)
    } 

    function handleClickNext(){
        if(slide < questions.length -1){
            setSlide(slide + 1);
        }else{
            setSlide(slide + 1);
            finalResult();
        }
    }

    function handleClickPrev(){
        if(slide != 0){
            setSlide(slide - 1);
        }
    }

    function handleClickRestart(){
        window.location.reload()
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            {questions.map((pergunta, index) => (
            <Radio
                    active={slide === index} 
                    key={pergunta.id}
                    value={respostas[pergunta.id]}
                    onChange={handleChange}
                    {...pergunta}
                />
            ))}

            {result ? (<><p>{result}</p><button onClick={handleClickRestart}>Reiniciar</button></>) : (<><button onClick={handleClickPrev}>Anterior</button> <button onClick={handleClickNext}>Próxima</button></>)}

        </form>
    )
}

export default Exercicio9
