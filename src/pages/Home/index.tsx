import { useLanguages } from "../../hooks/context";
import * as S from "./styles";

export const Home = () => {
  const { languages } = useLanguages();
  return (
    <S.Container>
      <S.Card>
        <S.Title>Home</S.Title>
        <S.List>
          {languages.map((language) => (
            <S.ListItem key={language}>{language}</S.ListItem>
          ))}
        </S.List>
      </S.Card>
    </S.Container>
  );
};
