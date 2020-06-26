import React from 'react';

const Contact = ({data}) => {
    return(
        <div id="contact">
            <p className="profileSubtitle">Kontaktuppgifter</p> 
            <table>
                <tbody>
                            <tr>
                                <th>Telefon</th>
                                <td>{data.phone}</td>
                           </tr>
                            <tr>
                                <th>Mail</th>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                                <th>Adress</th>
                                <td>{data.adress}</td>
                            </tr>
                            <tr>
                                <th>Postnummer</th>
                                <td>{data.zipcode}</td>
                            </tr>
                            <tr>
                                <th>Postort</th>
                        <td>{data.city}</td>
                            </tr>
                </tbody>     
            </table>
        </div>
    );
}

export default Contact;