import React from "react";
import mo2ipic1 from "../../assets/images/mo2i_pic1.png";
import mo2ipic3 from "../../assets/images/mo2i_pic3.png";
import mo2ipic4 from "../../assets/images/mo2i_pic4.jpeg";

import { Button } from "issa-react-component-library";
import { handleButtonCalendly } from "../../lib/interfaces";

const Mo2i: React.FC<handleButtonCalendly> = (props: {
 handleShow: () => void;
}) => {
 return (
  <>
   <div className="text-center italic my-16 text-sm xl:text-4xl">
    <p>Connaissance de soi, Trouver ton excellence d&apos;action</p>
   </div>
   <div>
    <img
     src={mo2ipic1}
     className="w-full lg:h-screen"
     alt="photo du site de Yasmina Corman"
    />
   </div>
   <div className="italic text-sm text-center xl:text-4xl my-8">
    <p>
     Identifier ton Excellence d’action ou Mode Opératoire Identitaire et
     Itératif (Mo2i)
    </p>
   </div>
   <div className="flex s:flex-col">
    <div className="w-full space-y-4 s:p-4 s:text-sm xl:text-4xl xl:space-y-8 lg:text:6xl">
     <p className="">
      Un modèle et une méthode découverts par Joël Guillon pour te permettre
      d’identifier et de t&apos;approprier ton Excellence d’Action, celle qui te
      rend unique et irremplaçable dans la maîtrise et la transformation de
      certaines situations dans la fluidité, l&apos;élégeance,
      l&apos;efficacité, la facilité et le plaisir !
     </p>
     <p className="underline">
      <strong>Tes Besoins</strong>
     </p>
     <ul>
      <li>- Trouver du sens et œuvrer dans le plaisir</li>
      <li>- Définir ta singularité dans l’action</li>
      <li>- Etre repéré et distingué par ceux qui ont le plus besoin de toi</li>
      <li>- Orientation professionnel</li>
      <li>- Trouver et comprendre sa place</li>
      <li>
       - Mettre des mots sur ce que tu fais d’excellent et sur la manière de le
       faire, (ce que les tests habituels ne peuvent pas dire de toi).
      </li>
      <li>- Qu&apos;apportes tu le plus aux autres ?</li>
     </ul>
    </div>
   </div>
   <div>
    <div className="flex lg:flex-row s:flex-col lg:h-screen">
     <div className="lg:w-1/2">
      <img
       src={mo2ipic3}
       className="w-full lg:h-screen"
       alt="photo du site de Yasmina Corman"
      />
     </div>
     <div className="lg:w-1/2 s:w-full flex flex-col space-y-4 lg:p-8 s:p-4 s:text-sm lg:text:6xl xl:text-4xl xl:space-y-8">
      <div>
       <p className="underline">
        <strong>Les Bénéfices</strong>
       </p>
      </div>
      <div>
       <p>
        La seule méthode efficace est celle qui permet d’identifier les
        séquences d’action que tu maîtrises non consciemment avec fluidité,
        élégance et efficacité et qui aboutissent à un résultat considéré comme
        « excellent ». La seule méthode qui part de toi et qui ne te met pas
        dans une case.
       </p>
      </div>
      <div>
       <ul>
        <li>- Quel est ton super pouvoir</li>
        <li>- Trouver et comprendre sa juste place</li>
        <li>- Être reconnu</li>
        <li>- Faire la différence</li>
        <li>- Mieux communiquer sur comment tu fais</li>
        <li>- Lancer et/ou développer ton actvité</li>
        <li>- Oeuvrer dans le plaisir et la sérénité financière</li>
        <li>- Donner un nouvel élan à ta vie</li>
        <li>- Cohésion d&apos;équipe</li>
        <li>- Faire la différence</li>
       </ul>
      </div>
     </div>
    </div>
   </div>
   <div className="flex lg:flex-row-reverse s:flex-col lg:h-screen">
    <div className="lg:w-1/2">
     <img
      src={mo2ipic4}
      className="w-full lg:h-screen"
      alt="photo du site de Yasmina Corman"
     />
    </div>
    <div className="lg:w-1/2 s:w-full flex flex-col p-4 s:text-sm lg:text:6xl xl:text-4xl bg-roseCustom">
     <div>
      <p className="underline font-bold py-4">le Mo2i pour tous:</p>
     </div>
     <div className="space-y-4">
      <div>
       <p className="underline font-bold pb-2">Entreprises</p>
       <p>
        Engager une dynamique de reconnaissance et de mobilisation de
        l’excellence d’Action a des <strong>bénéfices spectaculaires</strong>{" "}
        sur la performance individuelle et collective.
        <br /> Ton organisation peut commencer par identifier le Mo2i de ses{" "}
        <strong>dirigeants</strong>, de ses <strong>managers </strong> et{" "}
        <strong>talents clés</strong>. Puis elle peut s&apos;adresser aux
        équipes en fonction des <strong>enjeux stratégiques</strong> du moment.
       </p>
      </div>
      <div>
       <p className="underline font-bold pb-2">Particuliers et salariés</p>
       <p>
        Une démarche puissante et indispensable pour continuer à{" "}
        <strong>orienter ta carrière</strong>, trouver un emploi ou une activité
        valorisant <strong>tes talents</strong>, occuper enfin{" "}
        <strong>ta juste place</strong> et y <strong>être reconnu</strong> pour
        ton Excellence d’Action.
        <br /> <strong>Retraités ou futurs retraités</strong>, une démarche pour
        donner un super élan créatif à ta <strong>nouvelle vie</strong>, lui
        donner du <strong>sens</strong> et <strong>œuvrer</strong> à contribuer
        au monde et à la société en cultivant plus que jamais ton plaisir d’agir
        !
       </p>
      </div>
      <div>
       <p className="underline font-bold pb-2">
        Indépendants ou futurs indépendants
       </p>
       <p>
        Cette démarche te permet de construire une{" "}
        <strong>offre puissante</strong> et séduisante qui{" "}
        <strong>te différencie clairement</strong> de celles des autres.
        <br /> Ton propre mécanisme d’excellence d’action identifié et reconnu,
        la suite logique est de le transformer en{" "}
        <strong>
         une offre de service qui « accroche » tes clients « naturels »
        </strong>
        , c’est-à-dire ceux qui souffrent de ne pas t&apos;avoir rencontré et
        donc de ne pas avoir encore profité de ce que ton Mo2i peut changer
       </p>
      </div>
     </div>

     <div className="space-y-2 py-4">
      <p>
       <strong>Plusieurs modalités existent selon tes besoins.</strong>
      </p>
      <p>
       <strong>
        Contactes moi pour mettre en place le format qui te correspond.
       </strong>
      </p>
      <div className="flex lg:flex-row s:flex-col">
       <div className="mx-auto">
        <Button
         className="text-sm p-4 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl xl:text-4xl"
         onClick={() => props.handleShow()}
         data-test="showCalendlyModal"
        >
         Booker mon entretien gratuit
        </Button>
       </div>
      </div>
     </div>
    </div>
   </div>
   {/* <div className="p-6 s:text-sm lg:text:6xl xl:text-4xl xl:space-y-4 bg-roseCustom">
    <div className="my-4">
     <p className="underline">
      <strong>Selon ton profil :</strong>
     </p>
    </div>
    <div className="space-y-8">
     <div>
      <p className="underline">Entreprises</p>
      <p>
       Engager une dynamique de reconnaissance et de mobilisation de
       l’excellence d’Action a des bénéfices spectaculaires sur la performance
       individuelle et collective. Ton organisation peut commencer par
       identifier le Mo2i de ses dirigeants, de ses managers et talents clés.
       Puis elle peut adresser les équipes en fonction des enjeux stratégiques
       du moment.
      </p>
     </div>
     <div>
      <p className="underline">Particuliers et salariés</p>
      <p>
       Une démarche puissante et indispensable pour continuer à orienter ta
       carrière, trouver un emploi ou une activité valorisant tes talents,
       occuper enfin ta juste place et y être reconnu pour ton Excellence
       d’Action. Retraités ou futurs retraités Une démarche pour donner un super
       élan créatif à ta nouvelle vie, lui donner du sens et œuvrer à contribuer
       au monde et à la société en cultivant plus que jamais ton plaisir d’agir
       !
      </p>
     </div>
     <div>
      <p className="underline">Indépendants ou futurs indépendants</p>
      <p>
       Cette démarche te permet de construire une offre puissante et séduisante
       qui te différencie clairement de celles des autres. Ton propre mécanisme
       d’excellence d’action identifié et reconnu, la suite logique est de le
       transformer en une offre de service qui « accroche » tes clients «
       naturels », c’est-à-dire ceux qui souffrent de ne pas t&apos;avoir
       rencontré et donc de ne pas avoir encore profité de ce que ton Mo2i peut
       changer
      </p>
     </div>
     <div className="flex lg:flex-row s:flex-col">
      <div className="mx-auto">
       <Button
        className="text-sm p-4 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl xl:text-4xl"
        onClick={() => props.handleShow()}
        data-test="showCalendlyModal"
       >
        Booker mon entretien gratuit
       </Button>
      </div>
     </div>
    </div>
   </div> */}
  </>
 );
};

export default Mo2i;
