import { IEmployee } from '../../@types/employee.type';
import './EmployeeList.style.css';

type EmployeeListProps = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void
}

export default function EmployeeList(props: EmployeeListProps) {

    const { list, onDeleteClickHnd } = props;

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
                                            <input type='button' value='View' />
                                            <input type='button' value='Edit' />
                                            <input type='button' value='Delete' onClick={() => onDeleteClickHnd(employee)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}