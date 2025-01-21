import UserCard from "../../components/userCard";


function Lesson03() {
    return (
        <div>
            <h2>React Props  </h2>
            <UserCard name={'Peter'} age={'35'} hobby={'diving'} />
            <UserCard name={'Peter'} age={'20'} hobby={'riding'}/>
            <UserCard name={'Anton'} age={'20'}  hobby={'board game'}/>
        </div>
    )
}

export default Lesson03;