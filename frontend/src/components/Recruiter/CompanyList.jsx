import CompanyCard from '../Recruiter/CompanyCard'
import CompanyFilterNavbar from './companyfilterheader';
import Footer from '../Custom/Footer/Footer';
const companies = [
    {
      id: "COMP001",
      name: "Tech Solutions Ltd.",
      email: "contact@techsolutions.com",
      phone: "+91 98765 43210",
      logo: "https://via.placeholder.com/100",
      location: "Delhi",
      active: true,
    },
    {
      id: "COMP002",
      name: "InnovateX Pvt. Ltd.",
      email: "info@innovatex.com",
      phone: "+91 97654 32109",
      logo: "https://via.placeholder.com/100",
      location: "Bangalore",
      active: false,
    },
    {
      id: "COMP003",
      name: "FutureTech Inc.",
      email: "support@futuretech.com",
      phone: "+91 99887 76655",
      logo: "https://via.placeholder.com/100",
      location: "Mumbai",
      active: true,
    },
    {
      id: "COMP004",
      name: "Global Recruiters",
      email: "hr@globalrecruiters.com",
      phone: "+91 98980 54321",
      logo: "https://via.placeholder.com/100",
      location: "Hyderabad",
      active: true,
    }
  ];
  
  

const CompanyList = () => {
    return (
        <>
            <CompanyFilterNavbar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 my-18">
                {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
                ))}
            </div>
            <Footer/>

      </>
    );
  };
  
  export default CompanyList;