function ProgramItem(props) {
    return (

        <div className="program-item">
            <a href='http://'>
              <div className="program-main-info">
                <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" alt="thisthat"/>
                <h2 className="program-title">{props.Title}</h2>
                <p className="program-description">{props.Description}</p>
              </div>

              <div className="program-features-wrapper">
                <ul className="program-features-list">
                  <li className="program-feature-item">{props.Level}</li>
                  <li className="program-feature-item">{props.Time}</li>
                </ul>
              </div>

              <span className="program-extra-info">{props.Extra}</span>
            </a>
          </div>


    )
}

export default ProgramItem