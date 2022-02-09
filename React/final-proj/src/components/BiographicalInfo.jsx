import SuspectPage from "./SuspectPage";

const BiographicalInfo = ({tab, data}) => {
    return ( 
        <div>
            <SuspectPage class="suspectpage" tab={tab} data={data}/>
        </div>
     );
}
 
export default BiographicalInfo;