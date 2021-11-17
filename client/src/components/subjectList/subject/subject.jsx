import "./subject.css"
const Subject=({subject})=>{
    return(
        <div className="subject">
            <div>{subject.subject}</div>
            <div>{subject.semestr}</div>
            <div>{subject.formcontrol}</div>
            <div>{subject.credits}</div>
        </div>
    );
};
export default Subject;