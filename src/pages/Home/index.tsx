import { useState } from "react";
import { DiReact } from "react-icons/di";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useLanguages } from "../../hooks/context";
import theme from "../../styles/theme";
import * as S from "./styles";

export const Home = () => {
  const [newLanguage, setNewLanguage] = useState("");
  const { languages, addLanguages } = useLanguages();

  const handleAddLanguage = () => {
    if (newLanguage) {
      addLanguages(newLanguage);
      setNewLanguage("");
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <TextField
          name="name"
          type={"text"}
          placeholder="Adicione a linguagem"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <Button
          size={"small"}
          onClick={() => handleAddLanguage()}
          disabled={newLanguage === "" ? true : false}
        >
          <span>Adicionar</span>
        </Button>
      </S.Wrapper>
      {languages.map((language) => (
        <S.Card key={language}>
          <S.ImgBox>
            <DiReact size={100} color={theme.colors.gray} />
          </S.ImgBox>
          <S.Content>
            <S.Title>{language}</S.Title>
          </S.Content>
        </S.Card>
      ))}
    </S.Container>
  );
};
