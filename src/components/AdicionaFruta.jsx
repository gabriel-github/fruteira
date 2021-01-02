import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action'

const AdicionaFruta = () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const dispatch = useDispatch()

  const adicionarFruta = (e) => {
    e.preventDefault();

    const fruta = {
        id: new Date(),
        nome,
        quantidade
    }

    dispatch(actions.adicionar(fruta))
  };

  return (
    <form onSubmit={adicionarFruta}>
      <input
        type="text"
        name={nome}
        placeholder="Fruta"
        required
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        name={quantidade}
        placeholder="Quantidade"
        required
        onChange={(e) => setQuantidade(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionaFruta;
