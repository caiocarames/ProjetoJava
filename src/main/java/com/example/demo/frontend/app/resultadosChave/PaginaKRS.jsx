"use client"
import Link from "next/link";
import styles from "./PaginaKRS.module.css";
import { useEffect, useState } from "react";

export default function PaginaKRS() {
  // Criação do estado para armazenar os resultadosChave
  const [resultadosChave, setResultadosChave] = useState([]);
  const [selectedId, setSelectedId] = useState("Todos");

  // Função para chamar a API e buscar os resultadosChave
  async function chamarAPIResultadosChave() {
    const URL = "http://localhost:8080/resultadosChave";
    try {
      const resp = await fetch(URL);
      if (resp.status === 200) {
        const resultadosChave = await resp.json(); // Resposta da API
        setResultadosChave(resultadosChave); // aqui salva os dados no estado
        console.log(resultadosChave)
      } else {
        console.error('Erro ao buscar iniciativas:', resp.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  // Função para dar o delete de algum resultados chave
  async function chamarAPIDeleteResultadosChave(id) { // Precisa receber como parâmetro qual id o usuário quer apagar
    const URL = `http://localhost:8080/resultadosChave/${id}`;
    try {
      const resp = await fetch(URL, {
        method: "DELETE",
      });

      if (resp.ok) {
        alert("Resultado Chave deletado com sucesso!");
        chamarAPIResultadosChave(); // da o get novamente para recarregar a página
      } else {
        console.error('Erro ao dar delete de um resultado chave:', resp.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  // Função para desassociar uma iniciativa
    async function chamarAPIDesassociarIni(id_kr, id_ini) {
      const URL = `http://localhost:8080/resultadosChave/${id_kr}/desassociarIni/${id_ini}`;
      try {
        const resp = await fetch(URL, { 
          method: 'DELETE' 
        });
        if (resp.status === 200 || resp.status === 204) {
          alert("Iniciativa desassociada com sucesso!");
          setIdIniciativaDesassociar('');
          chamarAPIResultadosChave();
        } else {
          console.error('Erro ao desassociar iniciativa:', resp.status);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

  // Hook useEffect para chamar a API assim que o componente for montado (isso faz com que não precise chamar toda hora a API pra recarregar a pagina)
  useEffect(() => {
    chamarAPIResultadosChave();
  }, []);

  // Função para filtrar pelo select
  const filtragem = (e) => {
    setSelectedId(e.target.value);
  };

  return (
    <div className="fundo">
      <div className={styles.pageWrapper}>
  <div className={styles.tituloArea}>
    <h1 className={styles.KRS}>Resultados Chave</h1>
  </div>
  <div className={styles.areaConteudo}>
    <div className={styles.filtroContainer}>
      <label htmlFor="filtro" className={styles.filtroTitulo}>Filtrar por ID:</label>
      <select
        id="filtro"
        name="resultadosChave"
        onChange={filtragem}
        value={selectedId}
        className={styles.select}
      >
        <option key="Todos" value="Todos">Todos</option>
        {resultadosChave.map((kr) => (
          <option key={kr.id_kr} value={kr.id_kr}>{kr.id_kr}</option>
        ))}
      </select>
    </div>
    <div className={styles.cardsColuna}>
      {resultadosChave
        .filter(kr => selectedId === "Todos" || kr.id_kr === Number(selectedId))
        .map((kr) => (
          <div className={styles.card} key={kr.id_kr}>
            <div className={styles.header}>
              <div className={styles.buttons}>
                <Link href="/AtualizarKRS"><button>Editar</button></Link>
                <button onClick={() => chamarAPIDeleteResultadosChave(kr.id_kr)}>Excluir</button>
              </div>
            </div>
            <div className={styles.idBox}>
              <span className={styles.idLabel}>ID:</span>
              <span className={styles.idValue}>{kr.id_kr}</span>
            </div>
            <div className={styles.kr_titulo}>
              {kr.descricao} <span> {kr.meta}</span>{" "}
              <span className={styles.porcentagem_kr}>{kr.porcentagem_conclusao_kr}%</span>
            </div>
            <div className={styles.progress_bar_kr}>
              <div className={styles.progress} style={{ width: `${kr.porcentagem_conclusao_kr}%` }}></div>
            </div>
            <ul className={styles.lista_bola}>
              {kr.iniciativas.map((iniciativa) => (
                <li className={styles.lista_num} key={iniciativa.id_iniciativas}>
                  <p className={styles.ini_titulo}>-{iniciativa.titulo}</p>
                  <span className={styles.porcentagem_ini}>{iniciativa.porcentagem_conclusao_iniciativa}%</span>
                  <div className={styles.button_desa}>
                    <button onClick={() => chamarAPIDesassociarIni(kr.id_kr, iniciativa.id_iniciativas)}>Desassociar</button>
                  </div>
                  <div className={styles.progress_bar_ini}>
                    <div className={styles.progress} style={{ width: `${iniciativa.porcentagem_conclusao_iniciativa}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
    <Link href="/CadastroKRS">
      <button className={styles.add_button} title="Adicionar Resultado Chave">+</button>
    </Link>
  </div>
</div>
    </div>
  );
}
