import BioData from './dataComponents/BioData';
import AssociateData from './dataComponents/AssociateData';
import FinanceData from './dataComponents/FinanceData';
import LocationData from './dataComponents/LocationData';
const SuspectCard = ({data}) => {

if (data == "bio-info") {
    return(
        <BioData data = {data}/>
    );
} else if (data == "associates") {
    return(
        <AssociateData data = {data}/>
    );
}else if (data == "finance") {
    return(
        <FinanceData data = {data}/>
    );
} else if (data == "location") {
    return(
        <LocationData data = {data}/>
    );
}};

export default SuspectCard;