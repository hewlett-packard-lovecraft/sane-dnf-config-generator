import React, { FC } from "react";
import Container from "react-bootstrap/Container";

import ConfigurationPane from "./ConfigurationPane";
import OutputPane from "./OutputPane";

const Main: React.FC = () => {
  const outputPlaceholder: string = 
`[main] 
gpgcheck=1 \n
installonly_limit=3 \n
clean_requirements_on_remove=True \n
best=True \n
skip_if_unavailable=True \n
max_parallel_downloads=10 \n
deltarpm=1 \n
fastestmirror=true \n
`;
  return (
    <Container className="Main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <ConfigurationPane />
          </div>
          <div className="col-lg-6">
            <OutputPane output={ outputPlaceholder }/>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
