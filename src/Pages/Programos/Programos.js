import Banner from "../../Components/ProgramosComponents/BannerComponents/Banner";
import ProgramItem from "../../Components/ProgramosComponents/ProgramItem";
import ProgramsFilter from "../../Components/ProgramosComponents/ProgramsFilterComponent/ProgramsFilter";
import "./Programos.css";



function Programos() {
    return (

        <div className="Programos">

        <div className="container">
    <div className="page-content">
      <h1 className="page-title">Programos</h1>
     <Banner />

      <div className="programs-wrapper">
        <ProgramsFilter />
        
        <div className="programs-list">
          <ProgramItem Title="Salesforce CRM – pradedančių" Description="„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
          Level="1 lygis" Time="Vakarais" Extra="Naujas"/>

          <ProgramItem Title="Python – pradedantiesiems užimtiems asmenims (223002626)" Description="Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu."
          Level="Finansuojama UŽT - dirbantiems" Time="Vakarais" Extra="Finansuojama UŽT"/>

          <ProgramItem Title="Salesforce CRM – pradedančių" Description="„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
          Level="1 lygis" Time="Vakarais" Extra="Naujas"/>

          <ProgramItem Title="Python – pradedantiesiems užimtiems asmenims (223002626)" Description="Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu."
          Level="Finansuojama UŽT - dirbantiems" Time="Vakarais" Extra="Finansuojama UŽT"/>

        </div>
      </div>
    </div>
  </div>
  </div>


    )
}

export default Programos