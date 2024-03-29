import './UniversalTable.style.scss'

interface UniversalTableProps{
    jsonData: any
}

const UniversalTable = ({ jsonData }: UniversalTableProps) => {
    if (!jsonData || !jsonData.data || !Array.isArray(jsonData.data)) {
      return <div>No data available.</div>;
    }
  
    // Pobierz pierwszy obiekt z danych, aby uzyskać klucze jako nagłówki kolumn
    const firstObject = jsonData.data[0];
    const headers = Object.keys(firstObject);
  
    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonData.data.map((item: any, index: any) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UniversalTable;