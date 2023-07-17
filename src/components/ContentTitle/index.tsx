import { ContentTitleContainer } from "./style";

interface ContentTitleProps {
   title: string;
}

export function ContentTitle({ title }: ContentTitleProps) {
   return (
      <ContentTitleContainer>
         <h2>{title}</h2>
         <div></div>
      </ContentTitleContainer>
   );
}
