import { IEmployee } from '../../@types/employee.type';
import './EmployeeList.style.css';

type EmployeeListProps = {
    list: IEmployee[]
}

export default function EmployeeList(props: EmployeeListProps) {

    const { list } = props;

    return (
        <>
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
                                            <input type='button' value='Delete' />
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