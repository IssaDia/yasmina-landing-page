import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const SupportText: React.FC = () => {
 return (
  <div className="p-6 s:text-sm lg:text:6xl xl:text-4xl">
   <p>
    Tu te sens comme amputé de qui tu es que ce soit dans ta vie professionnelle
    et/ou personnelle ?
   </p>
   <br />
   <p>
    Ras le bol d&apos;être dans le moule ? &nbsp;
    <FontAwesomeIcon icon={faArrowRightLong} size="1x" />
    &nbsp; Crée Le ton propre moule !<br /> Ras le bol de ne pas exprimer qui tu
    es et ce que tu as en toi ? &nbsp;
    <FontAwesomeIcon icon={faArrowRightLong} size="1x" /> &nbsp; Assume et
    exprime le !<br /> Ras le bol de se soumettre au code ?&nbsp;
    <FontAwesomeIcon icon={faArrowRightLong} size="1x" />
    &nbsp; Positionne tes codes !<br /> Ras le bol de cette souffrance de
    satisfaire les attentes des autres et pas les tiennes !&nbsp;
    <FontAwesomeIcon icon={faArrowRightLong} size="1x" /> &nbsp; Sois heureux
    pour aider les autres !
   </p>
   <br />
   <p>Pars à la découverte de ce que tu peux proposer de plus beau au monde.</p>
   <br />
   <div className="md:flex md:flex-row place-content-between border-2 bg-beige border-transparent rounded-md p-6">
    <div>
     <p className="underline">
      <strong>Ce que je propose & Thématique :</strong>
     </p>
     <br />
     <ul>
      <li>- Bilan de compétences (outils Mo2i)</li>
      <li>- Aide à la création d&apos;entreprise</li>
      <li>- Transition professionnelle</li>
      <li>- Coaching et Formation</li>
      <li>- Connaissance de soi</li>
      <li>- Confiance en soi</li>
      <li>- Passage à l&apos;action</li>
      <li>- Cohésion d&apos;équipe</li>
     </ul>
    </div>
    <div>
     <br />
     <div>
      <p className="underline">
       <strong>Pour qui ? :</strong>
      </p>
      <br />
      <p>
       Toute personne désirant optimiser son efficacité et son excellence dans
       l&apos;action en toute confiance:
      </p>
      <ul>
       <li>- Dirigeants d&apos;entreprise</li>
       <li>- Indépendants</li>
       <li>- Salariés</li>
       <li>- Etudiant (à partir de 16 ans)</li>
       <li>- Couples</li>
       <li>- En recherche d&apos;emploi</li>
       <li>- Retraité, futur retraité </li>
      </ul>
     </div>
    </div>
   </div>
   <div className="flex flex-row"></div>

   <br />
   <p>
    <strong>Découvrir ton excellence d&apos;action</strong> te permettra
    d&apos;exprimer ton plein potentiel et de te réaliser pleinement, dans le
    plaisir, la sérénité financière et dans ta créativité.
   </p>
   <br />
   <p>
    <strong>Dans un monde où chacun excelle de manière unique</strong>, il
    n&apos;y a plus de rivalité, chacun est à sa place et chacun reconnait cette
    place !
   </p>
   <p>
    Réussir là où tu fais la difference,
    <br />
    Réussir là où tu brilles en toute confiance
   </p>
   <p>Book ton entretien pour plus d&apos;infos</p>
  </div>
 );
};

export default SupportText;
