import React from 'react';

const Contact = ({data}) => {
    return(
        <div id="contact">
            <p className="profileSubtitle">Kontaktuppgifter</p> 
            <table>
                <tbody>
                            <tr>
                                <th>Telefon</th>
                                <td>{data[0].phone}</td>
                           </tr>
                            <tr>
                                <th>Mail</th>
                                <td>{data[0].email}</td>
                            </tr>
                            <tr>
                                <th>Adress</th>
                                <td>{data[0].address}</td>
                            </tr>
                            <tr>
                                <th>Postnummer</th>
                                <td>{data[0].zipcode}</td>
                            </tr>
                            <tr>
                                <th>Postort</th>
                        <td>{data[0].city}</td>
                            </tr>
                </tbody>     
            </table>
        </div>
    );
}

export default Contact;