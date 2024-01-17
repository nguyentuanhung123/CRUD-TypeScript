import { useState } from "react"
import './Home.style.css'
import { IEmployee, PageEnum, dumpEmployeeList } from "../../@types/employee.type"

//components
import EmployeeList from "../EmployeeList"
import EmployeeCreate from "../EmployeeCreate"

export default function Home() {

    const [employeeList, setEmployeeList] = useState(dumpEmployeeList as IEmployee[])

    const [shownPage, setShownPage] = useState(PageEnum.list);

    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data]);
    }

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React: Simple CRUD Application</h1>
                </header>
            </article>

            <section className='section-content'>
                {
                    shownPage === PageEnum.list && (
                        <>
                            <input type="button" value='Add Employee' onClick={onAddEmployeeClickHnd} />
                            <EmployeeList list={employeeList} />
                        </>
                    )
                }
                {
                    shownPage === PageEnum.add && <EmployeeCreate onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee} />
                }
            </section>
        </>
    )
}