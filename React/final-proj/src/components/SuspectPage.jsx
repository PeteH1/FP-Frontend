import BioData from './dataComponents/BioData';
import AssociateData from './dataComponents/AssociateData';
import FinanceData from './dataComponents/FinanceData';
import LocationData from './dataComponents/LocationData';
const SuspectPage = ({tab, data}) => {

if (tab == "bio-info") {
    return(
        <BioData data={data} />
    );
} else if (tab == "associates") {
    return(
        <AssociateData data = {data}/>
    );
}else if (tab == "finance") {
    return(
        <FinanceData data = {data}/>
    );
} else if (tab == "location") {
    return(
        <LocationData data = {data}/>
    );
} else {
    return(
        <h2>Data Loading</h2>
    )
}};

export default SuspectPage;