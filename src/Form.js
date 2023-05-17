import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import "./Form.css";

export default function Form() {
  const { register, handleSubmit, watch } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const findingsNodulesMasses = watch("findingsNodulesMasses");
  const findingsMicrocalcifications = watch("findingsMicrocalcifications");
  const intramammaryAdenopathy = watch("intramammaryAdenopathy");

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Dados do Paciente</h1>
      <label htmlFor="patientId">ID do Paciente:</label>
      <input
        id="patientId"
        type="number"
        {...register("patientId", { required: true })}
      />
      <div>
        <h1>Composição da Mama</h1>
        <label htmlFor="breastComposition">Tipo:</label>
        <select
          id="breastComposition"
          {...register("breastComposition", { required: true })}
        >
          <option value="">Selecione...</option>
          <option value="Predomínio de tecido gorduroso">
            Predomínio de tecido gorduroso
          </option>
          <option value="Presença de áreas densas esparsas">
            Presença de áreas densas esparsas
          </option>
          <option value="Heterogeneamente densas">
            Heterogeneamente densas
          </option>
          <option value="Extremamente densas">Extremamente densas</option>
        </select>
      </div>

      <div>
        <h2>Nódulos/Massas</h2>
        <label>
          Achados de Nódulos/Massas:
          <select {...register("findingsNodulesMasses")}>
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        {findingsNodulesMasses === "Sim" && (
          <>
            <label>
              Tamanho:
              <select {...register("size")}>
                <option value="">Selecione...</option>
                <option value="Menor que 5mm">Menor que 5mm</option>
                <option value="Entre 5mm e 1cm">Entre 5mm e 1cm</option>
                <option value="Entre 1cm e 2cm">Entre 1cm e 2cm</option>
                <option value="Maior que 2cm">Maior que 2cm</option>
              </select>
            </label>
            <label>
              Forma:
              <select {...register("shape")}>
                <option value="">Selecione...</option>
                <option value="Redonda">Redonda</option>
                <option value="Oval">Oval</option>
                <option value="Lobulada">Lobulada</option>
                <option value="Irregular">Irregular</option>
              </select>
            </label>
            <label>
              Margens:
              <select {...register("margins")}>
                <option value="">Selecione...</option>
                <option value="Circunscrita">Circunscrita</option>
                <option value="Obscurecida">Obscurecida</option>
                <option value="Microlobulada">Microlobulada</option>
                <option value="Indistinta">Indistinta</option>
                <option value="Espiculada">Espiculada</option>
              </select>
            </label>
            <label>
              Densidade:
              <select {...register("density")}>
                <option value="">Selecione...</option>
                <option value="Alta densidade">Alta densidade</option>
                <option value="Densidade igual ao parênquima">
                  Densidade igual ao parênquima
                </option>
                <option value="Baixa densidade">Baixa densidade</option>
                <option value="Contendo-Gordura">Contendo-Gordura</option>
              </select>
            </label>
          </>
        )}
      </div>
      <div>
        <h2>Microcalcificações</h2>
        <label>
          Achados de Microcalcificações:
          <select {...register("findingsMicrocalcifications")}>
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        {findingsMicrocalcifications === "Sim" && (
          <>
            <label>
              Morfologia:
              <input type="text" {...register("morphology")} />
            </label>
            <label>
              Distribuição:
              <input type="text" {...register("distribution")} />
            </label>
          </>
        )}
      </div>
      <h1>Distorção Arquitetônica</h1>
      <label htmlFor="architecturalDistortion">
        Perda normal de arquitetura:
      </label>
      <select
        id="architecturalDistortion"
        {...register("architecturalDistortion", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Yes">Sim</option>
        <option value="No">Não</option>
      </select>
      <div>
        <h2>Casos especiais</h2>
        <label>
          Assimetria:
          <select {...register("asymmetry")}>
            <option value="">Selecione...</option>
            <option value="Desenvolvendo assimetria">
              Desenvolvendo assimetria
            </option>
            <option value="Assimetria focal">Assimetria focal</option>
            <option value="Assimetria global">Assimetria global</option>
            <option value="Sem assimetria">Sem assimetria</option>
          </select>
        </label>
        <label>
          Adenopatia intramamária:
          <select {...register("intramammaryAdenopathy")}>
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        {intramammaryAdenopathy === "Sim" && (
          <label>
            Tamanho da maior adenopatia (mm):
            <input type="number" {...register("adenopathySize")} />
          </label>
        )}
        <label>
          Lesão de Pele:
          <select {...register("skinLesion")}>
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <label>
          Ducto Dilatado:
          <select {...register("dilatedDuct")}>
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
      </div>
      <h1>Recursos Associados</h1>
      <label htmlFor="axillaryAdenopathy">Adenopatia Axilar:</label>
      <select
        id="axillaryAdenopathy"
        {...register("axillaryAdenopathy", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Yes">Sim</option>
        <option value="No">Não</option>
      </select>
      <label htmlFor="nippleRetraction">Retração do mamilo:</label>
      <select
        id="nippleRetraction"
        {...register("nippleRetraction", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Yes">Sim</option>
        <option value="No">Não</option>
      </select>
      <label htmlFor="skinRetraction">Retração da pele:</label>
      <select
        id="skinRetraction"
        {...register("skinRetraction", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Yes">Sim</option>
        <option value="No">Não</option>
      </select>
      <label htmlFor="skinThickening">Espessamento da pele:</label>
      <select
        id="skinThickening"
        {...register("skinThickening", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Yes">Sim</option>
        <option value="No">Não</option>
      </select>
      <label htmlFor="trabecularThickening">Espessamento Trabecular:</label>
      <select
        id="trabecularThickening"
        {...register("trabecularThickening", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Yes">Sim</option>
        <option value="No">Não</option>
      </select>
      <h1>Localização da Lesão</h1>
      <label htmlFor="lateralLocation">Lateralmente:</label>
      <select
        id="lateralLocation"
        {...register("lateralLocation", { required: true })}
      >
        <option value="">Selecione...</option>
        <option value="Lateralidade direita">Lateralidade direita</option>
        <option value="Lateralidade esquerda">Lateralidade esquerda</option>
      </select>
      <label htmlFor="quadrant">Quadrante:</label>
      <select id="quadrant" {...register("quadrant", { required: true })}>
        <option value="">Selecione...</option>
        <option value="Quadrante superior interno">
          Quadrante superior interno
        </option>
        <option value="Quadrante superior externo">
          Quadrante superior externo
        </option>
        <option value="Quadrante inferior interno">
          Quadrante inferior interno
        </option>
        <option value="Quadrante inferior externo">
          Quadrante inferior externo
        </option>
      </select>
      <label htmlFor="depth">Profundidade:</label>
      <select id="depth" {...register("depth", { required: true })}>
        <option value="">Selecione...</option>
        <option value="Terço anterior">Terço anterior</option>
        <option value="Terço médio">Terço médio</option>
        <option value="Terço posterior">Terço posterior</option>
      </select>
      <label htmlFor="distanceFromNipple">Distância do mamilo (mm):</label>
      <input
        id="distanceFromNipple"
        type="number"
        {...register("distanceFromNipple", { required: true })}
      />
      <h1>Realização de Mamografia</h1>
      <label htmlFor="mammographyDate">Data da Mamografia:</label>
      <input
        id="mammographyDate"
        type="date"
        {...register("mammographyDate", { required: true })}
      />
      <h1>Resultado</h1>
      <label htmlFor="biRads">BI-RADS:</label>
      <select id="biRads" {...register("biRads", { required: true })}>
        <option value="">Selecione...</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <label htmlFor="additionalNotes">Notas adicionais:</label>
      <textarea id="additionalNotes" {...register("additionalNotes")} />
      <input type="submit" />
      <div />

      {submittedData && (
        <PDFDownloadLink
          document={<MyDocument formData={submittedData} />}
          fileName="ficha_medica.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      )}
    </form>
  );
}
