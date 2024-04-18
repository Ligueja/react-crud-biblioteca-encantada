import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
// import { v4 as generateUUID } from "uuid";
import { Container } from "../compnents/style/Container";
import { Title } from "../compnents/style/Title";
import { Divider } from "../compnents/style/Divider";
import { Table } from "../compnents/style/Table";
import { ActionButton } from "../compnents/style/ActionButton";
import { FloatButton } from "../compnents/style/FloatButton";

export interface ModalState {
  mode?: "create" | "update" | "delete";
  isOpen: boolean;
}

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
  return (
    <Fragment>
      <Container>
        <Title>Contatos</Title>
        <Divider />

        <Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Publicação</th>
              <th>Cadastro</th>
              <th>Gênero</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cadastros.map((cadastro) => (
              <tr key={cadastro.id}>
                <td>{cadastro.titulo}</td>
                <td>{cadastro.autor}</td>
                <td>{cadastro.anoPublicacao}</td>
                <td>{cadastro.dataCadastro}</td>
                <td>{cadastro.genero}</td>
                <td>{cadastro.descricao}</td>
                <td>
                  <ActionButton onClick={() => {}}>Excluir</ActionButton>
                  <ActionButton onClick={() => {}}>Atualizar</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <FloatButton onClick={() => {}}>+</FloatButton>
    </Fragment>
  );
}
