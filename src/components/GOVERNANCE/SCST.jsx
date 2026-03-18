import React from "react";
import GovernanceTemplate from "./GovernanceTemplate";
import { governanceData } from "./data";

const SCST = () => {
    const data = governanceData.scst;

    return (
        <GovernanceTemplate
            heroData={data.heroData}
            title={data.title}
            description={data.description}
            documents={data.documents || []}
        />
    );
};

export default SCST;
