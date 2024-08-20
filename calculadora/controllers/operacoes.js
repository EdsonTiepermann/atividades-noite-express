function soma(body)
{
    return (parseFloat(body.n1) + parseFloat(body.n2));

}

function subtracao(body)
{
    return (parseFloat(body.n1) - parseFloat(body.n2));
}

function multiplicacao(body)
{
    return (parseFloat(body.n1) * parseFloat(body.n2));
}

function divisao(body)
{
    return (parseFloat(body.n1) / parseFloat(body.n2));
}


module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}