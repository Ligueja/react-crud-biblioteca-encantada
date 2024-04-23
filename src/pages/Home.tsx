import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { v4 as generateUUID } from "uuid";
import { Container } from "../compnents/style/Container";
import { Title } from "../compnents/style/Title";
import { Divider } from "../compnents/style/Divider";
import { Table } from "../compnents/style/Table";
import { ActionButton } from "../compnents/style/ActionButton";
import { FloatButton } from "../compnents/style/FloatButton";
import { Modal } from "../compnents/functional/Modal";
import { Input } from "../compnents/style/Imput";

export interface ModalState {
  mode?: "create" | "update" | "delete";
  isOpen: boolean;
}

interface Library {
  id: string;
  titulo: string;
  autor: string;
  anoPublicacao: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

export function Libraries() {
  const [cadastros, setCadastros] = useState<Library[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [anoPublicacao, setAnoPublicacao] = useState<string>("");
  const [dataCadastro, setDataCadastro] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false);
  const [cadastroSelected, setCadastroSelected] = useState<Library>({
    id: "",
    titulo: "",
    autor: "",
    anoPublicacao: "",
    dataCadastro: "",
    genero: "",
    descricao: "",
  });

  useEffect(() => {
    const storageData = localStorage.getItem("cadastros");

    if (storageData) {
      setCadastros(JSON.parse(storageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
  }, [cadastros]);

  useEffect(() => {
    console.log(cadastroSelected);
  }, [cadastroSelected]);

  function cadastrarLivro() {
    if (!titulo.length) {
      alert("É preciso preencher o título!");
      return;
    }
    if (autor.length < 3) {
      alert("É preciso preencher o nome do autor com mais de três caracteres!");
      return;
    }
    if (anoPublicacao.length < 4) {
      alert("Digitar o ano de publicação conforme exemplo: 0000");
      return;
    }
    if (dataCadastro.includes("//") || dataCadastro.length < 10) {
      alert("Preencher a data de cadastro conforme exemplo: 00/00/0000");
      return;
    }
    if (!genero.length) {
      alert("É preciso preencher o gênero!");
      return;
    }
    if (descricao.length < 5) {
      alert("É preciso preencher a descrição!");
      return;
    }

    const newLivro: Library = {
      id: generateUUID(),
      titulo: titulo,
      autor: autor,
      anoPublicacao: anoPublicacao,
      dataCadastro: dataCadastro,
      genero: genero,
      descricao: descricao,
    };

    setCadastros((current) => [newLivro, ...current]);

    limparCampos();

    closeModal("create");
  }

  function closeModal(mode: "create" | "update") {
    if (mode === "create") {
      setModalCreateIsOpen(false);
    } else {
      setModalUpdateIsOpen(false);
    }
  }

  function openModal(mode: "create" | "update") {
    if (mode === "create") {
      setModalCreateIsOpen(true);
    } else {
      setModalUpdateIsOpen(true);
    }
  }

  function limparCampos() {
    setTitulo("");
    setAutor("");
    setAnoPublicacao("");
    setDataCadastro("");
    setGenero("");
    setDescricao("");
  }

  function handleDelete(cadastro: Library) {
    const isConfirmed = confirm(
      `Tem certeza que deseja excluir o cadastro do livro ${cadastro.titulo}`
    );

    if (isConfirmed) {
      setCadastros(cadastros.filter((c) => c.id !== cadastro.id));
    }
  }

  function handleUpdate(cadastro: Library) {
    openModal("update");
    setCadastroSelected(cadastro);
  }

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setCadastroSelected({
      ...cadastroSelected,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }

  function confirmUpdade() {
    const indexFound = cadastros.findIndex((c) => c.id === cadastroSelected.id);

    if (indexFound !== -1) {
      const copy = [...cadastros];

      copy[indexFound] = cadastroSelected;
      setCadastros(copy);
    }
    closeModal("update");
  }

  return (
    <Fragment>
      <Container>
        <Title>LIVROS - Biblioteca Mágica</Title>
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
                  <ActionButton onClick={() => handleDelete(cadastro)}>
                    Excluir
                  </ActionButton>
                  <ActionButton onClick={() => handleUpdate(cadastro)}>
                    Atualizar
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <FloatButton onClick={() => openModal("create")}>+</FloatButton>

      <Modal
        title='Novo Livro'
        textButtonConfirm='Cadastrar'
        actionConfirm={cadastrarLivro}
        isOpen={modalCreateIsOpen}
        actionCLose={() => closeModal("create")}
      >
        <Input
          type='text'
          name='titulo'
          placeholder='Título'
          value={titulo}
          onChange={(ev) => setTitulo(ev.currentTarget.value)}
        />
        <Input
          type='text'
          name='autor'
          placeholder='Autor'
          value={autor}
          onChange={(ev) => setAutor(ev.currentTarget.value)}
        />
        <Input
          type='text'
          name='anoPublicacao'
          placeholder='Ano de publicação'
          value={anoPublicacao}
          onChange={(ev) => setAnoPublicacao(ev.currentTarget.value)}
        />
        <Input
          type='text'
          name='dataCadasto'
          placeholder='Data de Cadastro'
          value={dataCadastro}
          onChange={(ev) => setDataCadastro(ev.currentTarget.value)}
        />
        <Input
          type='text'
          name='genero'
          placeholder='Gênero'
          value={genero}
          onChange={(ev) => setGenero(ev.currentTarget.value)}
        />
        <Input
          type='text'
          name='descricao'
          placeholder='Descrição'
          value={descricao}
          onChange={(ev) => setDescricao(ev.currentTarget.value)}
        />
      </Modal>

      <Modal
        title='Atualizar Livro'
        textButtonConfirm='Atualizar'
        actionCLose={() => closeModal("update")}
        isOpen={modalUpdateIsOpen}
        actionConfirm={confirmUpdade}
      >
        <Input
          type='text'
          name='titulo'
          placeholder='Título'
          value={cadastroSelected.titulo}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='autor'
          placeholder='Autor'
          value={cadastroSelected.autor}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='anoPublicacao'
          placeholder='Ano de publicação'
          value={cadastroSelected.anoPublicacao}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='dataCadasto'
          placeholder='Data de Cadastro'
          value={cadastroSelected.dataCadastro}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='genero'
          placeholder='Gênero'
          value={cadastroSelected.genero}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='descricao'
          placeholder='Descrição'
          value={cadastroSelected.descricao}
          onChange={handleInputChange}
        />
      </Modal>
    </Fragment>
  );
}
