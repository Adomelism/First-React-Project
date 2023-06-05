import ShopItem from "../../Components/ContactUsComponents/ShopItemComponent/ShopItem"
import Map from "../../Components/ContactUsComponents/MapComponent/Map"
import "./ContactUs.css"


function ContactUs() {
    return (
        <div className="container">
    <div className="content">
      <div className="shops-wrapper">
        <h1 className="shops-section-title">Find Us</h1>

        <div className="shops-list">
            <ShopItem title="Parduotuve 1" phone="+37061111111" email="info@parduotuve1.lt" address="Vilniaus g. 20, Vilnius"></ShopItem>
            <ShopItem title="Parduotuve 2" phone="+37062222222" email="info@parduotuve2.lt" address="Vilniaus g. 21, Vilnius"></ShopItem>
            <ShopItem title="Parduotuve 3" phone="+37063333333" email="info@parduotuve3.lt" address="Vilniaus g. 22, Vilnius"></ShopItem>
            <ShopItem title="Parduotuve 4" phone="+37064444444" email="info@parduotuve4.lt" address="Vilniaus g. 23, Vilnius"></ShopItem>
          
        </div>
      </div>

      <Map></Map>
    </div>
  </div>

    )
}

export default ContactUs