import React from "react";
import GovernanceTemplate from "./GovernanceTemplate";
import { governanceData } from "./data";

const RTI = () => {
    const data = governanceData.rti;

    return (
        <GovernanceTemplate
            heroData={data.heroData}
            title={data.title}
            description={data.description}
            documents={data.documents || []}
        />
    );
};

export default RTI;
