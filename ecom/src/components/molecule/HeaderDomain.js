import React from "react";
import Link from "../atoms/Link";
import TopLinks from "../../static/json/Header.json";

class HeaderDomain extends React.Component {
  render() {
    return (
      <div className="o-container container p-0 m-0">
        <div className="m-boutiques-links">
          <div className="o-row row justify-content-between">
            <div className="o-col col-lg-8">
              <div className="o-row row">
              {TopLinks.map((record, index) => {
                  return (
                    <div key={index} className="o-col col-lg-auto">
                    <Link
                      classNameAnchor="a-boutique__link strong"
                      href={record.Action}
                    >
                      {record.Menu_Item}
                    </Link>
                    </div>
                    );
                  })}
              </div>
            </div>
            <div className="o-col col-lg-4">
              <div className="o-row row justify-content-end"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderDomain;
