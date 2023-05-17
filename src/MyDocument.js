import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const getBiRadsMessage = (biRads) => {
  switch (biRads) {
    case "0":
      return `BI-RADS: ${biRads} - Exame inconclusivo - Recomenda-se complementar o estudo - Risco de câncer: Exame incompleto`;
    case "1":
      return `BI-RADS: ${biRads} - Normal - Recomenda-se exame de rotina anual - Risco de câncer: 0`;
    case "2":
      return `BI-RADS: ${biRads} - Achado benigno - Recomenda-se exame de rotina anual - Risco de câncer: 0`;
    case "3":
      return `BI-RADS: ${biRads} - Achado provavelmente benigno - Recomenda-se realizar controle precoce (em 6, 12, 24 e 36 meses) - Risco de câncer: Menor ou igual a 2%`;
    case "4":
      return `BI-RADS: ${biRads} - Achado suspeito - Recomenda-se prosseguir a investigação e realizar biópsia - Risco de câncer: De 3 a 94%`;
    case "5":
      return `BI-RADS: ${biRads} - Achado altamente suspeito - Recomenda-se prosseguir a investigação e realizar biópsia - Risco de câncer: Maior ou igual a 95%`;
    case "6":
      return `BI-RADS: ${biRads} - Achado investigado previamente e com resultado positivo (câncer) - Recomenda-se tratamento adequado - Risco de câncer: 100%`;
    default:
      return "";
  }
};

// Crie estilos
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    flexDirection: "column",
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#c45a8c",
    textTransform: "uppercase",
    borderBottom: "1pt solid #ccc",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#c45a8c",
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: "#333",
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
    marginBottom: 8,
    color: "#555",
  },
  disclaimer: {
    fontSize: 10,
    marginBottom: 10,
    color: "#888",
  },
});

// Função auxiliar para mapear o valor do campo
const mapFieldValue = (fieldName, fieldValue) => {
  if (
    fieldName === "findingsNodulesMasses" ||
    fieldName === "findingsMicrocalcifications" ||
    fieldName === "architecturalDistortion" ||
    fieldName === "intramammaryAdenopathy" ||
    fieldName === "skinLesion" ||
    fieldName === "dilatedDuct" ||
    fieldName === "axillaryAdenopathy" ||
    fieldName === "nippleRetraction" ||
    fieldName === "skinRetraction" ||
    fieldName === "skinThickening" ||
    fieldName === "trabecularThickening"
  ) {
    return fieldValue === "Sim" ? "Sim" : "Não";
  }
  return fieldValue;
};

// Crie o componente do documento
const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Dados do Paciente</Text>
        <Text style={styles.fieldLabel}>ID do Paciente:</Text>
        <Text style={styles.fieldValue}>{formData.patientId}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Composição da Mama</Text>
        <Text style={styles.fieldLabel}>Tipo:</Text>
        <Text style={styles.fieldValue}>{formData.breastComposition}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Nódulos/Massas</Text>
        <Text style={styles.fieldLabel}>Achados de Nódulos/Massas:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue(
            "findingsNodulesMasses",
            formData.findingsNodulesMasses
          )}
        </Text>
        {formData.findingsNodulesMasses === "Sim" && (
          <>
            <Text style={styles.fieldLabel}>Tamanho:</Text>
            <Text style={styles.fieldValue}>{formData.size}</Text>
            <Text style={styles.fieldLabel}>Forma:</Text>
            <Text style={styles.fieldValue}>{formData.shape}</Text>
            <Text style={styles.fieldLabel}>Margens:</Text>
            <Text style={styles.fieldValue}>{formData.margins}</Text>
            <Text style={styles.fieldLabel}>Densidade:</Text>
            <Text style={styles.fieldValue}>{formData.density}</Text>
          </>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Microcalcificações</Text>
        <Text style={styles.fieldLabel}>Achados de Microcalcificações:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue(
            "findingsMicrocalcifications",
            formData.findingsMicrocalcifications
          )}
        </Text>
        {formData.findingsMicrocalcifications === "Sim" && (
          <>
            <Text style={styles.fieldLabel}>Morfologia:</Text>
            <Text style={styles.fieldValue}>{formData.morphology}</Text>
            <Text style={styles.fieldLabel}>Distribuição:</Text>
            <Text style={styles.fieldValue}>{formData.distribution}</Text>
          </>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Distorção Arquitetônica</Text>
        <Text style={styles.fieldLabel}>Perda normal de arquitetura:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue(
            "architecturalDistortion",
            formData.architecturalDistortion
          )}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Casos Especiais</Text>
        <Text style={styles.fieldLabel}>Assimetria:</Text>
        <Text style={styles.fieldValue}>{formData.asymmetry}</Text>
        <Text style={styles.fieldLabel}>Adenopatia intramamária:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue(
            "intramammaryAdenopathy",
            formData.intramammaryAdenopathy
          )}
        </Text>
        {formData.intramammaryAdenopathy === "Sim" && (
          <>
            <Text style={styles.fieldLabel}>
              Tamanho da maior adenopatia (mm):
            </Text>
            <Text style={styles.fieldValue}>{formData.adenopathySize}</Text>
          </>
        )}
        <Text style={styles.fieldLabel}>Lesão de Pele:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("skinLesion", formData.skinLesion)}
        </Text>
        <Text style={styles.fieldLabel}>Ducto Dilatado:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("dilatedDuct", formData.dilatedDuct)}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Recursos Associados</Text>
        <Text style={styles.fieldLabel}>Adenopatia Axilar:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("axillaryAdenopathy", formData.axillaryAdenopathy)}
        </Text>
        <Text style={styles.fieldLabel}>Retração do mamilo:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("nippleRetraction", formData.nippleRetraction)}
        </Text>
        <Text style={styles.fieldLabel}>Retração da pele:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("skinRetraction", formData.skinRetraction)}
        </Text>
        <Text style={styles.fieldLabel}>Espessamento da pele:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("skinThickening", formData.skinThickening)}
        </Text>
        <Text style={styles.fieldLabel}>Espessamento Trabecular:</Text>
        <Text style={styles.fieldValue}>
          {mapFieldValue("trabecularThickening", formData.trabecularThickening)}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Localização da Lesão</Text>
        <Text style={styles.fieldLabel}>Lateralmente:</Text>
        <Text style={styles.fieldValue}>{formData.lateralLocation}</Text>
        <Text style={styles.fieldLabel}>Quadrante:</Text>
        <Text style={styles.fieldValue}>{formData.quadrant}</Text>
        <Text style={styles.fieldLabel}>Profundidade:</Text>
        <Text style={styles.fieldValue}>{formData.depth}</Text>
        <Text style={styles.fieldLabel}>Distância do mamilo (mm):</Text>
        <Text style={styles.fieldValue}>{formData.distanceFromNipple}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Realização de Mamografia</Text>
        <Text style={styles.fieldLabel}>Data da Mamografia:</Text>
        <Text style={styles.fieldValue}>{formData.mammographyDate}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Resultado</Text>
        <Text style={styles.fieldValue}>
          {getBiRadsMessage(formData.biRads)}
        </Text>
        <Text style={styles.fieldLabel}>Notas adicionais:</Text>
        <Text style={styles.fieldValue}>{formData.additionalNotes}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
