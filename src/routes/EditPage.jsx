import './EditPage.css';
import AngryBirdsMultiple from '../assets/angry-birds-multiple.png';
import NavBar from '../components/NavBar'
import EditForm from '../components/EditForm'

function EditPage() {

  return (
    <div className="App">
      <NavBar />
      <h1>Edit Your Bird</h1>
      <img src={AngryBirdsMultiple} alt="Angry Birds" width="200px"/>
      <h2>Edit your Bird below:</h2>
      <EditForm />
    </div>
  )
}

export default EditPage;