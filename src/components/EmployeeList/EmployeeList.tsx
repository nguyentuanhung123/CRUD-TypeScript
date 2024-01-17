import { IEmployee } from '../../@types/employee.type';
import './EmployeeList.style.css';

//components
import EmployeeModal from '../EmployeeModal';
import { useState } from 'react';

type EmployeeListProps = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void
    onEdit: (data: IEmployee) => void
}

export default function EmployeeList(props: EmployeeListProps) {

    const { list, onDeleteClickHnd, onEdit } = props;

    const [showModal, setShowModal] = useState(false);

    const [dataToShow, setDataToShow] = useState<IEmployee | null>(null);
    // const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data);
        setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <h3 className='list-header'>Employee List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <div>
                                            <input type='button' value='View' onClick={() => viewEmployee(employee)} />
                                            <input type='button' value='Edit' onClick={() => onEdit(employee)} />
                                            <input type='button' value='Delete' onClick={() => onDeleteClickHnd(employee)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* add dataToShow !== null on View */}
            {
                showModal && dataToShow !== null && <EmployeeModal onClose={onCloseModal} data={dataToShow} />
            }
        </>
    )
}