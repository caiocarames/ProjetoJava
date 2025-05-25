"use client"
import Link from "next/link";
import styles from "./PaginaObjetivos.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // para Next.js 13+

export default function PaginaObjetivos() {
  const router = useRouter();

  // Criação do estado para armazenar os Objetivos
  const [objetivos, setObjetivos] = useState([]);
  const [selectedId, setSelectedId] = useState("Todos");

  // Função para chamar a API e buscar os Objetivos
  async function chamarAPIObjetivo() {
    const URL = "http://localhost:8080/objetivos";
    try {
      const resp = await fetch(URL);
      if (resp.status === 200) {
        const data = await resp.json();
        console.log("Objetivos recebidos:", data);
        setObjetivos(data);
      } else {
        console.error('Erro ao buscar objetivos:', resp.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  // Função para dar o delete de algum objetivo 
  async function chamarAPIDeleteObjetivo(id) { // Precisa receber como parâmetro qual id o usuário quer apagar
    const URL = `http://localhost:8080/objetivos/${id}`;
    try {
      const resp = await fetch(URL, {
        method: "DELETE",
      });

      if (resp.ok) {
        alert("Objetivo deletado com sucesso!");
        chamarAPIObjetivo(); // da o get novamente para recarregar a página
      } else {
        console.error('Erro ao dar delete de um objetivo:', resp.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  // Função para desassociar um Resultado Chave
    async function chamarAPIDesassociarKR(id, id_kr) {
      const URL = `http://localhost:8080/objetivos/${id}/desassociarKR/${id_kr}`;
      try {
        const resp = await fetch(URL, { 
          method: 'DELETE' 
        });
        if (resp.status === 200 || resp.status === 204) {
          alert("Resultado Chave desassociado com sucesso!");
          setIdResultadosChaveDesassociar('');
          chamarAPIObjetivo();
        } else {
          console.error('Erro ao desassociar Resultado Chave:', resp.status);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

  useEffect(() => {
    chamarAPIObjetivo();
  }, []);

  const filtragem = (e) => {
    setSelectedId(e.target.value);
  };

  return (
    <div className="fundo">
      <div className={styles.objetivosPage}>
        <div className={styles.tituloArea}>
          <h1 className={styles.tit}>Objetivos</h1>
        </div>
        <div className={styles.areaConteudo}>
          <div className={styles.filtroContainer}>
            <label htmlFor="filtroId" className={styles.filtroTitulo}>Filtrar por ID:</label>
            <select id="filtroId" className={styles.select} value={selectedId} onChange={filtragem}>
              <option value="Todos">Todos</option>
              {objetivos.map(obj => (
                <option key={obj.id} value={obj.id}>{obj.id}</option>
              ))}
            </select>
          </div>
          <div className={styles.cardsColuna}>
            {/* Map para cada Objetivo*/}
            {objetivos.filter((objetivo) => selectedId === "Todos" || objetivo.id === Number(selectedId)).map((objetivo) => (
            <div className={styles.card} key={objetivo.id}>
              <div className={styles.header}>
                <div className={styles.buttons}>
                  <Link href="/AtualizarObjetivos"><button>Editar</button></Link>
                  <button onClick={() => chamarAPIDeleteObjetivo(objetivo.id)}>Excluir</button>
                </div>
              </div>
              <div>
  <span className={styles.idLabel}>ID:</span>
  <span className={styles.idValue}>{objetivo.id}</span>
</div>
              <div className={styles.objective_title}>
                {objetivo.titulo} <span className="percentage">{objetivo.porcentagem_conclusao_obj}%</span>
              </div>
              <div className={styles.progress_bar_obj}>
                <div className={styles.progress} style={{ width: `${objetivo.porcentagem_conclusao_obj}%` }}></div>
              </div>
              {objetivo.resultadosChaves.map((resultadoChave) => (
                <div className={styles.kr} key={resultadoChave.id_kr}>
                  <div className={styles.kr_titulo}>
                    {resultadoChave.descricao} <span> {resultadoChave.meta}</span>{" "}
                    <span className={styles.porcentagem_kr}>{resultadoChave.porcentagem_conclusao_kr}%</span>
                  </div>
                  <div className={styles.progress_bar_kr}>
                    <div className={styles.progress} style={{ width: `${resultadoChave.porcentagem_conclusao_kr}%` }}></div>
                  </div>
                  <ul className={styles.lista_bola}>
                   {resultadoChave.iniciativas.map((iniciativas) => (
                    <li className={styles.lista_num} key={iniciativas.id_iniciativas}>
                      <p className={styles.ini_titulo}>-{iniciativas.titulo}</p>
                      <span className={styles.porcentagem_ini}>{iniciativas.porcentagem_conclusao_iniciativa}%</span>
                      <div className={styles.progress_bar_ini}>
                        <div className={styles.progress} style={{ width: `${iniciativas.porcentagem_conclusao_iniciativa}%` }}></div>
                      </div>
                      {/* Campo adicional para desassociar uma iniciativa */}
                      <div className={styles.button_desa}>
                        <button onClick={() => chamarAPIDesassociarKR(objetivo.id, resultadoChave.id_kr)}>Desassociar</button>
                      </div>
                    </li>
                    ))}
                </ul>
                </div>
              ))}
            </div>
          ))}
          </div>
          <button
            className={styles.add_button}
            title="Adicionar objetivo"
            onClick={() => router.push("/CadastroObjetivos")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
