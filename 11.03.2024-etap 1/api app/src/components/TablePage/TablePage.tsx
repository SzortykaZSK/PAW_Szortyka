import DataComponent from '../DataComponent/DataComponent';
import FormComponent from '../FormComponent/FormComponent';
import Header from '../Header/Header';
import './TablePage.style.scss';

interface TablePageProps{
    tableName: string
}

function TablePage({tableName}: TablePageProps) {

  return (
    <div className='mainTableContainer'>
        <Header tableName={tableName}/>
        <div className="formContainer">
            <FormComponent tableName={tableName}/>
        </div>
        <div className='dataContainer'>
            <DataComponent tableName={tableName}/>
        </div>
    </div>
  )
}

export default TablePage
