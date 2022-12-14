import React, { useEffect, useState } from 'react';
import { read, utils } from 'xlsx';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


export const SheetManager = () => {   
 const [inputText,setInputText] = useState(" ");
   const [sheetData, setSheetData] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [sheetList, setSheetList] = useState([]);

    const loadSheet = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const f = await (file).arrayBuffer();
        const wb = read(f);
        const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        console.log(data);
        setSheetData(data);
    }

    const fetchSheets = async () => {
        const res = await fetch('http://localhost:5000/sheet/getbyuser/'+currentUser._id);
        const data = await res.json();
        console.log(res.status);
        console.log(data);
        setSheetList(data);

    }

    useEffect(() => {
      fetchSheets();
    }, [])
    

    const saveToDb = async () => {
        const res = await fetch('http://localhost:5000/sheet/add', {
            method : 'POST',
            body : JSON.stringify({
                title : "example name",
                data : sheetData,
                createdAt : new Date(),
                user : currentUser._id
            }),
            headers : { 'Content-Type' : 'application/json' }
        });

        if(res.status===200){
          fetchSheets();
          Swal.fire({
            icon: 'Success',
            title: 'Success',
            text: 'Data Stored Successfully'
          });
        }

    }

    
      

    return (
        <div>
            <div className="container py-5">
                <p className="text-center h3 mb-4">Sheet Manager</p>
                <input onChange={loadSheet} type="file" /> 
                
                <button onClick={saveToDb}>Save SHeet</button>
            </div>

            <div className="vh-100">
        <div className="container-fluid">
         

              <table className='table table-dark table-striped'>
                <thead>
                  <tr>
                    <th>Sheet Name</th>
                    <th>Saved</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    sheetList.map((sheet) => (
                      <tr>
                        <td>{sheet.title}</td>
                        <td>{sheet.saved ? 'Saved' : 'Not Saved'}</td>
                        <td>{new Date(sheet.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              
        </div>
      </div>
    </div>
        
    )
}
