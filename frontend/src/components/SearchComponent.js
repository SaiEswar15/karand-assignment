import React from 'react'
import { useSelector } from 'react-redux'
import "../styles/SearchComponent.css"


function SearchComponent() {


    const searchModal = useSelector((state) => state.api.searchModal)

    const downloadPDF = (searchModal) => {
        // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
        const pdfPath = `../../../uploads/${searchModal.proof}`;
    
        // Creating a temporary link element
        const link = document.createElement('a');
    
        // Setting the href attribute to the PDF file path
        link.href = pdfPath;
    
        // Setting the download attribute to force download
        link.download = searchModal.proof;
    
        // Triggering the click event on the link
        link.click();
      };

    return (
        <div className='searchdata-container'>
            {searchModal ?
                <div className='details-con'>
                    <h1>Your details</h1>
                    <div className='details-col'>
                        <div className='details-col-1'>
                            <div><p>Name </p></div>
                            <div><p>Mobile </p></div>
                            <div><p>email </p></div>
                            <div><p>Aadhar Card Number </p></div>
                            <div><p>PAN Number </p></div>
                            <div><p>Company </p></div>
                            <div><p>Job Title </p></div>
                            <div><p>Date of joining </p></div>
                            <div><p>Date of ending </p></div>
                            <div><p>Status </p></div>
                            <div><p>Reason for Endorse </p></div>
                            <div><p>Witnesses </p></div>
                            <section className='proofs-div'><p>Proofs </p></section>

                        </div>
                        <div className='details-col-2'>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <div><p> : </p></div>
                            <section className='proofs-div'><p> : </p></section>

                        </div>
                        <div className='details-col-3'>
                            <div><p>{searchModal.name}</p></div>
                            <div><p>{searchModal.mobile}</p></div>
                            <div><p>{searchModal.email}</p></div>
                            <div><p>{searchModal.aadhar}</p></div>
                            <div><p>{searchModal.pan}</p></div>
                            <div><p>{searchModal.company}</p></div>
                            <div><p>{searchModal.title}</p></div>
                            <div><p>{searchModal.doj}</p></div>
                            <div><p>{searchModal.doe}</p></div>
                            <div><p>{searchModal.status}</p></div>
                            <div><p>{searchModal.reasonToEndorse}</p></div>
                            <div><p>{searchModal.witnesses}</p></div>
                            <section
                                className='proofs-div'
                                id="downloadIcon"
                                style={{ cursor: 'pointer' }}
                                onClick={()=>{downloadPDF(searchModal)}}
                            >
                                <p>{searchModal.proof}</p>
                                <img src="download-icon.png" alt="Download Icon" width="50" height="50" />
                            </section>
                        </div>
                    </div>

                </div> :
                null}
        </div>
    )
}

export default SearchComponent