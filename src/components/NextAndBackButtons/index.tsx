import { useNavigate } from "react-router-dom";
import { NextAndBackButtonsContainer } from "./style";
import { useTranslation } from "react-i18next";

export function NextAndBackButtons({
   urlNext,
   urlBack,
}: {
   urlNext: string;
   urlBack: string;
}) {
   const navigate = useNavigate();
   const { t } = useTranslation();
   return (
      <NextAndBackButtonsContainer>
         <button onClick={() => navigate(urlNext)}>{t("Continuar")}</button>
         <button onClick={() => navigate(urlBack)}>{t("Voltar")}</button>
      </NextAndBackButtonsContainer>
   );
}
