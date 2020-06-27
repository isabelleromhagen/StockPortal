import React from 'react';

const Contact = ({label, labelData}) => {
    return(
            <tr>
                <th className="contactLabel">{label}</th>
                <td className="contactData">{labelData}</td>
            </tr>
    );
}

export default Contact;