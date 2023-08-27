import { useParams, Navigate } from "react-router-dom";
import DataLogement from "../../data/logements.json";
import Carrousel from "./Carrousel";
import Tags from "./Tags";
import Host from "./Host";
import Rate from "./Rating";
import Collapse from "../collapse/Collapse";
import "../../style/components/logement/logementcards.css";


const LogementDisplay = () => {
    const { id } = useParams();

    const Logement = DataLogement.find((logement) => logement.id === id);

    const tagsList = Logement?.tags.map((tags) => {
      return <Tags key={tags} nom={tags} />;
    });

    return (
        <>
          {Logement ? (
            <div className="LogementCardContainer">
                <Carrousel slides={Logement?.pictures}> </Carrousel>
                <section className="ProfilContainer">
                  <div  className="Profil">
                    <div className="Logement_leftside">
                      <div className="Logement_title">
                        <span className="Logement_title_name">
                            {Logement?.title}
                        </span>
                        <span>
                          {Logement?.location}
                        </span>
                      </div>
                      <div className="Logement_tags">
                        {tagsList}
                      </div>
                    </div>
                    <div className="Logement_rightside">
                      <div className="LogementHostName">
                          <Host name={Logement?.host.name} picture={Logement?.host.picture}/>
                      </div>
                      <div className="Logement_rating">
                        <Rate score={Logement.rating} />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="LogementDescriptionContainer">
                  <div className="DescriptionLeft">
                    <Collapse title="Description" content={Logement?.description} />
                  </div>
                  <div className="DescriptionRight">
                    <Collapse title="Équipements" content={Logement?.equipments} />
                  </div>
                </div>
            </div>
          ) : (
            <Navigate to="/404" />
          )}
        </>
      );
};

export default LogementDisplay;