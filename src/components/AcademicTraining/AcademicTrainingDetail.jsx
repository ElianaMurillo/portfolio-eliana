import { useId } from 'react';

const AcademicTrainingDetail = ({ title, dateRange, listItems }) => {
    return (
        <div className='container-detail-education'>
            <p className='name-detail-education'>{ title }</p>
            <p className='date-detail-education'>{ dateRange }</p>
            <ul className='list-detail-education'>
                {
                    listItems.map(item => (
                        <li key={useId()}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AcademicTrainingDetail
