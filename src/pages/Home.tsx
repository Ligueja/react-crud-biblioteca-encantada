import { Fragment } from "react/jsx-runtime";
import { Formulario } from "../compnents/style/Formulario";
import { useState } from "react";
import { v4 as generateUUID } from "uuid";

interface Livraria {
  id: string;
  titulo: string;
  autor: string;
  anoPublicacao: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

export function Livrarias() {
  const [cadastros, setCadastros] = useState<Livraria[]>([]);

  function cadastrarLivro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const novoCadastro: Livraria = {
      id: generateUUID(),
      titulo: event.currentTarget["titulo"].value,
      autor: event.currentTarget["autor"].value,
      anoPublicacao: event.currentTarget["anoPublicacao"].value,
      dataCadastro: event.currentTarget["dataCadastro"].value,
      genero: event.currentTarget["genero"].value,
      descricao: event.currentTarget["descricao"].value,
    };

    setCadastros((currentValue) => [novoCadastro, ...currentValue]);

    event.currentTarget.reset();
  }

  function removerCadastro(idCadastro: string) {
    setCadastros((currentValue) =>
      currentValue.filter((cadastro) => cadastro.id !== idCadastro)
    );
  }

  return (
    <Fragment>
      <Formulario>
        <div>
          <h1>CADASTRO DE LIVROS</h1>
          <form onSubmit={cadastrarLivro}>
            <div>
              <label>Título:</label>
              <input type='text' name='titulo' placeholder='Titulo' required />
            </div>
            <div>
              <label>Autor:</label>
              <input type='text' name='autor' placeholder='Autor' required />
            </div>
            <div>
              <label>Ana da Publicação:</label>
              <input
                type='text'
                name='anoPublicacao'
                placeholder='Ano da Publicação'
                required
              />
            </div>
            <div>
              <label>Data do Cadastro:</label>
              <input
                type='text'
                name='dataCadastro'
                placeholder='Data do Cadastro'
                required
              />
            </div>
            <div>
              <label>Gênero:</label>
              <input type='text' name='genero' placeholder='Gênero' required />
            </div>
            <label>Descrição:</label>
            <textarea
              name='descricao'
              placeholder='Digite uma breve descrição sobre o livro'
              required
            ></textarea>
          </form>
          <ul>
            {cadastros.map((cadastro) => (
              <li
                key={cadastro.id}
                onClick={() => removerCadastro(cadastro.id)}
              >
                Título: {cadastro.titulo} - Autor: {cadastro.autor} - Ano
                Publicação: {cadastro.anoPublicacao} - Data de Cadastro:{" "}
                {cadastro.dataCadastro} - Gênero: {cadastro.genero} - Descrição:{" "}
                {cadastro.descricao}
              </li>
            ))}
          </ul>
        </div>
      </Formulario>
    </Fragment>
  );
}
