import React from "react";
import mo2ipic1 from "../../assets/images/mo2i_pic1.png";
import mo2ipic2 from "../../assets/images/mo2i_pic2.jpeg";
import mo2ipic3 from "../../assets/images/mo2i_pic3.png";
import mo2ipic4 from "../../assets/images/mo2i_pic4.jpeg";

const Mo2i: React.FC = () => {
 return (
  <>
   <div>
    <p>Connaissance de soi, Trouver votre excellence d&apos;action</p>
    <img src={mo2ipic1} />
    <p>
     Identifier votre Excellence d’action ou Mode Opératoire Identitaire et
     Itératif (Mo2i)
    </p>
    <img src={mo2ipic2} />
    <p>
     Un modèle et une méthode découverts par Joël Guillon pour vous permettre
     d’identifier et de vous approprier votre Excellence d’Action, celle qui
     vous rend unique et irremplaçable dans la maîtrise et la transformation de
     certaines situations dans La fluidité, lélégence, l&apos;efficacité, la
     facilité et le plaisir !
    </p>
    <p>Vos Besoins</p>
    <ul>
     <li>– Trouver du sens et œuvrer dans le plaisir</li>
     <li>– Définir votre singularité dans l’action</li>
     <li>– Etre repéré et distingué par ceux qui ont le plus besoin de vous</li>
     <li>– Orientation professionnel</li>
     <li>– Trouver et comprendre sa place</li>
     <li>
      – Mettre des mots sur ce que vous faites d’excellent et sur la manière de
      le faire, (ce que les tests habituels ne peuvent pas dire de vous).
     </li>
     <li>– Qu&apos;apportes tu le plus aux autres ?</li>
    </ul>
    <p>Les Bénéfices</p>
    <p>
     La seule méthode efficace est celle qui permet d’identifier les séquences
     d’action que vous maîtrisez non consciemment avec fluidité, élégance et
     efficacité et qui aboutissent à un résultat considéré comme « excellent ».
     La seule méthode qui part de vous et qui ne vous met pas dans une case.
    </p>
    <img src={mo2ipic3} alt="" />
    <ul>
     <li>– Quel est ton super pouvoir</li>
     <li>– Trouver et comprendre sa juste place</li>
     <li>– Être reconnu</li>
     <li>– Faire la différence</li>
     <li>– Mieux communiquer sur comment tu fais</li>
     <li>– Lancer et/ou développer son actvité</li>
     <li>– œuvrer dans le plaisir et la sérénité financière</li>
     <li>– donner un nouvel élan à votre vie</li>
     <li>– Cohésion d&apos;équipe</li>
     <li>– Faire la différence</li>
    </ul>
    <p>
     L&apos;effort est la signature de l&apos;apprentissage. La facilité et le
     plaisir sont la signature de l&apos;expert
    </p>
    <div className="flex flex-row">
     <p>Découvre Quel expert es tu ?</p>
     <button className="border-2">Réserver ma place</button>
    </div>
    <p className="underline">POUR QUI ? Pour tous à partir de 16ans :</p>
    <ul>
     <li>Entreprises</li>
     <li>Salariés Particulier</li>
     <li>Indépendant et futur indépendant</li>
     <li>Retraité futur retraité</li>
     <li>En recherche d&apos;emploi</li>
    </ul>
    <br />
    <p>Les formats possibles</p>
    <p>Plusieurs modalités existent selon vos besoins :</p>
    <ul>
     <li>
      – Atelier collectif de 2 jours consécutifs pour découvrir son Mode
      Opératoire Identitaire et Itératif
     </li>
     <li>– Accompagnement individuel de 5 séances en 8 Heures</li>
     <li>
      – Accompagnement Entretien familial d’identification du Mo2i des
      adolescents
     </li>
     <li>– Accompagnement couple mieux se connaitre et mieux communiquer</li>
     <li>– Accompagnement entretien de genèse</li>
     <li>
      – Autre format spécifique possible adapté aux besoins de votre
      organisation
     </li>
    </ul>
    <img src={mo2ipic4} alt="" />
    <p className="underline">Selon votre profil :</p>
    <p>Entreprises</p>
    <p>
     Engager une dynamique de reconnaissance et de mobilisation de l’excellence
     d’Action a des bénéfices spectaculaires sur la performance individuelle et
     collective. Votre organisation peut commencer par identifier le Mo2i de ses
     dirigeants, de ses managers et talents clés. Puis elle peut adresser les
     équipes en fonction des enjeux stratégiques du moment.
    </p>
    <p>Particuliers et salariés</p>
    <p>
     Une démarche puissante et indispensable pour continuer à orienter votre
     carrière, trouver un emploi ou une activité valorisant vos talents, occuper
     enfin votre juste place et y être reconnu pour votre Excellence d’Action.
     Retraités ou futurs retraités Une démarche pour donner un super élan
     créatif à votre nouvelle vie, lui donner du sens et œuvrer à contribuer au
     monde et à la société en cultivant plus que jamais votre plaisir d’agir !
    </p>
    <p>Indépendants ou futurs indépendants</p>
    <p>
     Cette démarche vous permet de construire une offre puissante et séduisante
     qui vous différencie clairement de celles des autres. Votre propre
     mécanisme d’excellence d’action identifié et reconnu, la suite logique est
     de le transformer en une offre de service qui « accroche » vos clients «
     naturels », c’est-à-dire ceux qui souffrent de ne pas vous avoir rencontré
     et donc de ne pas avoir encore profité de ce que votre Mo2i peut changer
    </p>
    <button className="border-2">Télécharger la plaquette</button>
   </div>
  </>
 );
};

export default Mo2i;
