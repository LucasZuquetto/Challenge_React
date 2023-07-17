import { useTranslation } from "react-i18next";
import { ContentTitleContainer } from "./style";

interface ContentTitleProps {
   title: string;
}

export function ContentTitle({ title }: ContentTitleProps) {
   const { t } = useTranslation();
   return (
      <ContentTitleContainer>
         <h2>{t(title)}</h2>
         <div></div>
      </ContentTitleContainer>
   );
}
