import {
    iqacHero,
    rtiHero,
    equalOpportunityCellHero,
    collegeDevelopmentCommitteeHero,
    grievanceHero,
    divyangHero,
    vishakhaHero,
    scstHero,
    placementCellHero,
    studentCouncilHero,
    antiRaggingHero
} from "../common/data/heroData";

// Governance components data
export const governanceData = {
    iqac: {
        heroData: iqacHero,
        title: "Internal Quality Assurance Cell (IQAC)",
        description: "Internal Quality Assurance Cell (IQAC) is formed in the college as per the UGC guideline.",
        members: [],
        downloadButtonText: "Download IQAC Committee PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    rti: {
        heroData: rtiHero,
        title: "Right to Information",
        description: "Right to Information Committee is established in the college as per the RTI Act.",
        members: [],
        downloadButtonText: "Download RTI Committee PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    equalOpportunityCell: {
        heroData: equalOpportunityCellHero,
        title: "Equal Opportunity Cell",
        description: "An Equal Opportunity Cell is established in the college according to the promotion of equity in higher education.",
        members: [],
        downloadButtonText: "Download Equal Opportunity Cell PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    collegeDevelopmentCommittee: {
        heroData: collegeDevelopmentCommitteeHero,
        title: "College Development Committee",
        description: "College Development Committee was established in the college as per UGC guidelines.",
        members: [
            { id: 1, name: "Hon'ble Shree .Madhavrao Chavhan", designation: "Local Member" }
        ],
        downloadButtonText: "Download Student Development Committee PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    grievanceRedressalCell: {
        heroData: grievanceHero,
        title: "Grievance Redressal Cell",
        description: "Grievance Redressal Cell is established in the college as per the UGC (Grievance Redressal) Regulation, 2018.",
        members: [],
        downloadButtonText: "Download Grievance Redressal Committee PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    divyangCell: {
        heroData: divyangHero,
        title: "Divyang Cell (Equal Opportunity Cell)",
        description: "Divyang Cell is established in the college as UGC had accepted the Act of Parliament as Person with Disability (Equal Opportunities Protection of Rights and Full Participation) Act 1995.",
        members: [],
        downloadButtonText: "Download Divyang Cell Committee PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    vishakha: {
        heroData: vishakhaHero,
        title: "Vishakha / Women's Anti-Sexual Harassment Cell",
        description: "An Women's Anti-Sexual Harassment Cell is established under the Sexual Harassment at Workplace (Prevention and Prohibition and Redressal Act 2013).",
        members: [],
        downloadButtonText: "Download Women's Cell PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    scst: {
        heroData: scstHero,
        title: "SC/ST Cell",
        description: "SC/ST Cell is established in the college as per the guidelines of University Grants Commission to safeguard the interests of students and staff from SC/ST communities.",
        members: [],
        downloadButtonText: "Download SC/ST Cell PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    placementCell: {
        heroData: placementCellHero,
        title: "PLACEMENT CELL",
        description: "PLACEMENT CELL WAS ESTABLISHED IN THE COLLEGE AS PER THE UGC GUIDELINES.",
        members: [],
        downloadButtonText: "Download Placement Cell PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    studentCouncil: {
        heroData: studentCouncilHero,
        title: "Student Council",
        description: "As per Maharashtra Public University Act, 2016 Section college has established an active student council every year.",
        members: [
            { name: "Dr. Vinod Raut", designation: "Principal" },
            { name: "Dr. Rahul Dhere", designation: "Teacher Representative Male" },
            { name: "Prof. Anita Kale", designation: "Teacher Representative Female" },
            { name: "Prof. Sunita Pawar", designation: "Counselor" },
            { name: "", designation: "Student Council Representative ( S.Y.B.ED)" },
            { name: "", designation: "Student Council Representative ( F.Y.B.ED)" }
        ],
        downloadButtonText: "Download Women's Cell PDF",
        pdfPath: "/pdf/pdf1.pdf"
    },
    antiRagging: {
        heroData: antiRaggingHero,
        title: "ANTI RAGGING CELL",
        description: "As per Clause 6.3(A) of University Grant Commission regulations to asper clause of Ragging College has established AntiRagging Cell.",
        members: [],
        downloadButtonText: "Download Anti Ragging Cell PDF",
        pdfPath: "/pdf/pdf1.pdf"
    }
};
