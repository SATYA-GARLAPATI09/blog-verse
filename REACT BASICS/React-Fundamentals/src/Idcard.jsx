import "./IdCard.css";
function IdCard({ student }) {
    const id = {
        fontSize: "24px",
        color: "blue",
        margin: "10px 0"
    };
    return (

        <div className="id-card">
            <h2 style={id}>Student ID Card</h2>
            <h4>{student.college}</h4>
            <img src={student.image} alt="" />
            <h4>Name: {student.name}</h4>
            <h5>Roll No: {student.rollno}</h5>
            <p>Age: {student.age}</p>
            <p>Blood Group: {student.bloodGroup}</p>
            <p>Location: {student.location}</p>
        </div>
    );  
}
export default IdCard;