import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// ─── Desktop: third-level nested dropdown ───────────────────────────────────
const NestedDropdown = ({ item, onClose, align = "left" }) => {
  const [open, setOpen] = useState(false);
  const nestedRef = useRef(null);

  const handleToggle = (e) => { e.preventDefault(); setOpen(!open); };
  const handleClose = () => { setOpen(false); onClose(); };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nestedRef.current && !nestedRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={nestedRef}>
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
      >
        <span className="truncate pr-2">{item.title}</span>
        <FaChevronDown
          className={`text-[9px] transition-transform duration-300 shrink-0 ${align === "left"
            ? (open ? "rotate-180" : "-rotate-90")
            : (open ? "rotate-180" : "rotate-90")
            }`}
        />
      </button>

      {open && item.items && (
        <ul className={`absolute top-0 w-auto bg-white border border-gray-200 shadow-md z-50 rounded-md ${align === "left" ? "left-full ml-1" : "right-full mr-1"}`}>
          {item.items.map((subItem, index) => (
            <li key={index}>
              {subItem.items ? (
                <NestedDropdown item={subItem} onClose={handleClose} align={align} />
              ) : subItem.external ? (
                <a href={subItem.link} target="_blank" rel="noopener noreferrer" onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {subItem.label}
                </a>
              ) : (
                <Link to={subItem.link} onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {subItem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

// ─── Desktop: top-level dropdown ────────────────────────────────────────────
const Dropdown = ({ title, items, align = "left" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-0.5 px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-gray-800 hover:text-green-600 uppercase tracking-wide transition-colors"
      >
        {title}
        <FaChevronDown className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && items.length > 0 && (
        <ul className={`absolute top-full mt-1 w-auto min-w-64 whitespace-nowrap bg-white border border-gray-200 shadow-md z-[80] rounded-md ${align === "left" ? "left-0" : "right-0"}`}>
          {items.map((item, index) => (
            <li key={index}>
              {item.items ? (
                <NestedDropdown item={item} onClose={handleClose} align={align} />
              ) : item.external ? (

                <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {item.label}
                </a>
              ) : (
                <Link to={item.link} onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// ─── Mobile: recursive accordion item ───────────────────────────────────────
const MobileNavItem = ({ item, closeMobileMenu, depth = 0 }) => {
  const [open, setOpen] = useState(false);

  if (item.items) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors
            ${depth === 0 ? "uppercase tracking-wide border-b border-gray-100" : "pl-3 border-l border-gray-200 font-medium"}`}
        >
          <span>{item.title || item.label}</span>
          <FaChevronDown className={`text-[10px] transition-transform duration-200 mr-1 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <ul className={`mt-1 space-y-1 ${depth === 0 ? "pl-3" : "pl-4"}`}>
            {item.items.map((child, i) => (
              <MobileNavItem key={i} item={child} closeMobileMenu={closeMobileMenu} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      {item.external ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
          className={`block py-1.5 text-sm text-gray-700 hover:text-green-700 transition-colors
            ${depth > 0 ? "pl-3 border-l border-gray-200" : ""}`}
        >
          {item.label}
        </a>
      ) : (
        <Link
          to={item.link}
          onClick={closeMobileMenu}
          className={`block py-1.5 text-sm text-gray-700 hover:text-green-700 transition-colors
            ${depth > 0 ? "pl-3 border-l border-gray-200" : ""}`}
        >
          {item.label}
        </Link>
      )}
    </li>
  );
};

// ─── Mobile: top-level group accordion ──────────────────────────────────────
const MobileGroup = ({ group, closeMobileMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-sm font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 hover:text-green-700 transition-colors"
      >
        <span>{group.title}</span>
        <FaChevronDown className={`text-[10px] transition-transform duration-200 mr-1 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="pl-3 mt-1 space-y-1">
          {group.items.map((item, i) => (
            <MobileNavItem key={i} item={item} closeMobileMenu={closeMobileMenu} depth={1} />
          ))}
        </ul>
      )}
    </li>
  );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const stickyStartYRef = useRef(0);
  const isStickyRef = useRef(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const updateNavMetrics = () => {
      if (navRef.current) {
        const currentNavHeight = navRef.current.offsetHeight;
        setNavHeight(currentNavHeight);
        if (!isStickyRef.current) {
          const navTop = navRef.current.getBoundingClientRect().top + window.scrollY;
          stickyStartYRef.current = navTop + currentNavHeight;
        }
      }
    };
    const updateStickyState = () => {
      const shouldStick = window.scrollY >= stickyStartYRef.current;
      if (shouldStick !== isStickyRef.current) {
        isStickyRef.current = shouldStick;
        setIsSticky(shouldStick);
      }
    };
    updateNavMetrics();
    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    window.addEventListener("resize", updateNavMetrics);
    window.addEventListener("resize", updateStickyState);
    return () => {
      window.removeEventListener("scroll", updateStickyState);
      window.removeEventListener("resize", updateNavMetrics);
      window.removeEventListener("resize", updateStickyState);
    };
  }, []);

  const navData = [
    {
      title: "Management",
      items: [
        { label: "President Message", link: "/president-desk" },
        { label: "General Secretary Message", link: "/general-secretary" },
        { label: "Vice President Desk", link: "/vice-president-desk" },
        { label: "Board of Director", link: "/board-members" },
      ],
    },
    {
      title: "About Us",
      items: [
        { label: "Organogram", link: "/pdf/organamism.pdf", external: true },
        { label: "Brahma Valley Of Education(Bed)", link: "/brahma-valley-of-education" },
        { label: "Principal Message", link: "/principal-desk" },
        { label: "Vision & Mission", link: "/vision-mission" },
        { label: "Silent Features", link: "/salient-features" },
        { label: "Faculty", link: "/faculty" },
        { label: "Committees", link: "/committees" },
        { label: "NCTE Recognition & Revise Order", link: "/ncte" },
        { label: "Government Permission", link: "/government-permission" },
        { label: "Award Received", link: "/awards" },
        { label: "Approvals & Affiliation", link: "/approvals-affiliation" },

      ],
    },
    {
      title: "GOVERNANCE",
      items: [
        { label: "Local Development Committee", link: "/" },
        { label: "Internal Quality Assurance Cell", link: "/iqac" },
        { label: "Right To Information", link: "/rti" },
        { label: "Equal Opportunity Cell", link: "/equal-opportunity-cell" },
        { label: "College Development Committee", link: "/college-development-committee" },
        { label: "Grievance Redressal Cell", link: "/grievance-redressal-cell" },
        { label: "Divyang Cell", link: "/divyang-cell" },
        { label: "Vishakha / Women / Anti Sexual Harassment Cell", link: "/vishakha-cell" },
        { label: "SC/ST Grievance Cell", link: "/scst-cell" },
        { label: "Placement Cell", link: "/placement-cell" },
        { label: "Student Council", link: "/student-council" },
        { label: "Anti Ragging Cell", link: "/anti-ragging-cell" },
      ],
    },
    {
      title: "Academics",
      items: [
        {
          title: "BED COURSES",
          items: [
            {
              title: "ANNUAL PLAN",
              items: [
                { label: "First Year (FY)", link: "/" },
                { label: "Second Year (SY)", link: "/" },
              ]
            },
            {
              title: "FEEDBACK",
              items: [
                { label: "STUDENT FEEDBACK", link: "/" },
                { label: "INTERNSHIP FEEDBACK", link: "/" },
                { label: "TEACHER FEEDBACK", link: "/" },
              ]
            },
          ],
        },
        { label: "AVAILABLE TEACHING METHOD", link: "/teaching-methods" },
        {
          title: "SYLLABUS",
          items: [
            {
              label: "PLO & CLO",
              link: "/"
            }
          ],
        },
        { label: "STUDENT ELIGIBILITY", link: "/" },
        {
          title: "LESSON DEPARTMENT",
          items: [
            { label: "LIST OF SCHOOL", link: "/" },
            { label: "FY", link: "/" },
            { label: "SY", link: "/" },
          ],
        },
        { label: "BED CET INTER-SC-MERIT", link: "/" },
        { label: "ROUND MERIT LIST", link: "/" },
      ],
    },
    {
      title: "Admission",
      items: [
        { label: "COURSE DETAILS & ELIGIBILITY", link: "/" },
        { label: "ADMISSION FORM", link: "/pdf/Admission Form.pdf", external: true },
        { label: "RESERVATION POLICY", link: "/pdf/Central State Gov Reservation policy 1.3 (1).pdf", external: true },
        { label: "FEES STRUCTURE", link: "/pdf/Fees.pdf", external: true },
        { label: "SCOLARSHIP", link: "/scholarship" },
        { label: "REQUIRED DOCUMENT", link: "/required-documents" },
        { label: "I-CARD FORM", link: "/pdf/i card form.pdf", external: true },
        { label: "ENQUIRY FORM", link: "/pdf/ENQUIRY FORM.pdf", external: true },
      ],
    },
    {
      title: "FACILITIES",
      items: [
        { label: "INFRASTRUCTURE", link: "/infrastructure" },
        { label: "LIBRARY", link: "/library" },
        { label: "LABORATARY", link: "/laboratory" },
        { label: "GYMNASIUM & SPORT", link: "/gymnasium-sport" },
        { label: "TRANSPORT", link: "/transport" },
        { label: "AUDIO & VIDEO", link: "/audio-video" },

      ],
    },
    {
      title: "STUDENT CORNER",
      items: [
        { label: "STUDENTS ACHIEVEMENT", link: "/" },
        { label: "STUDY MATERIAL", link: "/" },
        { label: "MOU’S", link: "/" },
      ],
    },
    {
      title: "MORE",
      items: [
        {
          title: "Examination",
          items: [
            { label: "Exam Time Table", link: "/exam-timetable" },
            { label: "EXAMINATION OFFICER", link: "/" },
            { label: "RESULT", link: "/result" },
            { label: "ACADEMIC CALENDER", link: "/academic-calendar" },
            { label: "ACHIEVEMENT", link: "/achievement" },
            { label: "EXAMINATION POLICY", link: "/pdf/ExaminationPolicy.pdf", external: true },
            { label: "UNIVERSITY LINKS", link: "/pdf/University-links.pdf", external: true },
          ],
        },
        {
          title: "TRAINING & PLACEMENT",
          items: [
            { label: "CULTURAL", link: "/" },
            { label: "SPORTS", link: "/" },
            { label: "FIELD VISIT/ STUDY TOUR", link: "/" },
            { label: "ART AND CRAFT", link: "/" },
            { label: "MUSIC", link: "/" },
            { label: "RESEARCH AND PUBLICATION", link: "/" },
            { label: "INNOVATION PUBLICATIONS", link: "/" },
            { label: "EXTENSION ACTIVITIES", link: "/" },
            { label: "SUCCESS STORIES", link: "/" },
            { label: "PLACEMENT CELL", link: "/" },
          ],
        },
        {
          title: "ALUMNI",
          items: [
            { label: "REGISTRATION FORM", link: "/pdf/registration-form.pdf", external: true },
            { label: "CERTIFICATE", link: "/" },
          ],
        },
        {
          title: "IQAC",
          items: [
            { label: "ACCREDITATION", link: "/" },
            { label: "SSR", link: "/" },
            { label: "IQAC CELL", link: "/" },
            { label: "ACADEMIC MONITORING COMMITTEE", link: "/" },
            { label: "NAAC DOCUMENTS", link: "/naac-documents" },
          ],
        },
        {
          title: "MEDIA",
          items: [
            { label: "PHOTOS", link: "/photos" },
            { label: "VIDEO", link: "/videos" },
          ],
        },
        { label: "CONTACT", link: "/contact" },
      ],
    },
  ];

  return (
    <>
      {isSticky && <div style={{ height: navHeight }} />}
      <header
        ref={navRef}
        className={`w-full bg-white text-gray-800 shadow-sm border-b border-gray-200 transition-all duration-200 ${isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
          }`}
      >
        <nav className="w-full px-6 xl:px-10 py-3 flex items-center">

          {/* LEFT LOGO */}
          <div className="shrink-0">
            <Link to="/">
              <img src="/logo/left-logo.png" alt="Logo" className="h-10 md:h-12 xl:h-14" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="flex-1 hidden xl:flex items-center justify-center px-2">
            <ul className="flex items-center space-x-1 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
              <li>
                <Link to="/" className="px-1.5 text-gray-800 hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              {navData.slice(0, 8).map((group, idx) => (
                <Dropdown key={idx} title={group.title} items={group.items} align={idx >= 5 ? "right" : "left"} />
              ))}
            </ul>

          </div>

          {/* RIGHT LOGO & HAMBURGER */}
          <div className="flex-1 xl:flex-none flex items-center justify-end gap-2 xl:gap-0">
            <div className="flex-shrink-0 xl:pl-6">
              <Link to="/">
                <img src="/logo/right-logo.png" alt="Right Logo" className="h-10 md:h-14 xl:h-20" />
              </Link>
            </div>
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-2xl p-2 text-gray-800 hover:text-green-600 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 xl:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={closeMobileMenu}
        />

        {/* MOBILE SIDE MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform xl:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-5 flex flex-col h-full overflow-y-auto">

            {/* Mobile header */}
            <div className="flex justify-between items-center mb-6">
              <img src="/logo/left-logo.png" alt="Logo" className="h-10" />
              <button onClick={closeMobileMenu} className="text-2xl text-gray-700 hover:text-gray-900">
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-1">

              {/* Home */}
              <li>
                <Link to="/" onClick={closeMobileMenu}
                  className="block py-2 text-sm font-bold text-gray-900 hover:text-green-700 uppercase tracking-wide border-b border-gray-100">
                  Home
                </Link>
              </li>

              {navData.slice(0, 8).map((group, idx) => (
                <MobileGroup key={idx} group={group} closeMobileMenu={closeMobileMenu} />
              ))}


            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;