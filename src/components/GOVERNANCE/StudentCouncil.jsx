import React from "react";
import GovernanceTemplate from "./GovernanceTemplate";
import { governanceData } from "./data";

const StudentCouncil = () => {
    const data = governanceData.studentCouncil;

    return (
        <GovernanceTemplate
            heroData={data.heroData}
            title={data.title}
            description={data.description}
            members={data.members}
            downloadButtonText={data.downloadButtonText}
            pdfPath={data.pdfPath}
        />
    );
};

export default StudentCouncil;